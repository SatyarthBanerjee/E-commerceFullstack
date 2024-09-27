<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
// Allow the Content-Type header
// header("Access-Control-Allow-Headers: Content-Type");
// Set response type to JSON
header("Content-Type: application/json");

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    // Read the raw input data from the request
    // print_r("post");
$input_data = json_decode(file_get_contents("php://input"));

// Check if the required fields are present
if (!empty($input_data->email) && !empty($input_data->password)) {
    $email = $input_data->email;
    $password = $input_data->password;

    // TODO: Add your authentication logic here
    // For example, check if the email and password are valid
    // Simulate a simple check here
    if ($email === "user@example.com" && $password === "secretpassword") {
        // Authentication successful
        http_response_code(200);
        $response = array("success" => true, "message" => "Login successful");
    } else {
        // Authentication failed
        http_response_code(500);
        $response = array("success" => false, "message" => "Invalid email or password");
    }
} else {
    // Invalid or incomplete data sent in the request
    $response = array("success" => false, "message" => "Invalid request data");
    
}
echo json_encode($response);
}else{
    http_response_code(503);
    echo json_encode(array(
        "status" => "0",
        "message" => "Access Denied"
    ));
}

// Send the JSON response
?>
