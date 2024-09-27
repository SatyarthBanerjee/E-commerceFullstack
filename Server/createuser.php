<?php
// Read the raw input data from the request
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

$input_data = json_decode(file_get_contents("php://input"), true);

// Check if the required fields are present
if (
    isset($input_data["email"]) &&
    isset($input_data["pass"])&&
    isset($input_data["username"])
) {
    $email = $input_data["email"];
    $password = password_hash($input_data["pass"], PASSWORD_DEFAULT);
    $username = $input_data["username"];

    // TODO: Add your database connection logic here
    $servername = "localhost";
    $db_username = "root";
    $db_password = "";
    $db_name = "keka";

    $conn = new mysqli($servername, $db_username, $db_password, $db_name);

    // Check the database connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Check if the email already exists for registration
    $checkExistingEmail = "SELECT * FROM `kekalogin` WHERE `email`='$email'";
    $result = $conn->query($checkExistingEmail);

    if ($result->num_rows > 0) {
        // Email already exists, return an error for registration
        $response = array("success" => false, "message" => "Email already registered");
    } 
    else 
    {
        // Perform registration
        $registerSql = "INSERT INTO `kekalogin` (`usename`,`email`, `password`) VALUES ('$username','$email', '$password')";

        if ($conn->query($registerSql) === TRUE) {
            $response = array("success" => true, "message" => "User registered successfully");
        } else {
            $response = array("success" => false, "message" => "Error: " . $registerSql . "<br>" . $conn->error);
        }
    }

    $conn->close();
} else {
    // Invalid or incomplete data sent in the request
    $response = array("success" => false, "message" => "Invalid request data");
}

// Send the JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
