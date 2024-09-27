<?php
// Read the raw input data from the request
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

$input_data = json_decode(file_get_contents("php://input"), true);

// Check if the required fields are present
if (
    isset($input_data["productname"]) &&
    isset($input_data["productprice"]) &&
    isset($input_data["productdesc"]) &&
    isset($input_data["productimage"])
) {
    $productname = $input_data["productname"];
    $productprice = $input_data["productprice"];
    $productdesc = $input_data["productdesc"];
    $productimage = $input_data["productimage"];

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

    // TODO: Add your SQL query to insert the product into the database
    $sql = "INSERT INTO productlist (productname, productprice, productdesc, productimage) 
            VALUES ('$productname', $productprice, '$productdesc', '$productimage')";

    if ($conn->query($sql) === TRUE) {
        $response = array("success" => true, "message" => "Product added successfully");
    } else {
        $response = array("success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error);
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
