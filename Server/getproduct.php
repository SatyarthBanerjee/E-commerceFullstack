<?php
// Read the raw input data from the request
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

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

// TODO: Add your SQL query to retrieve product details from the database
$sql = "SELECT * FROM productlist";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $products = array();

    // Fetch product details from the result set
    while ($row = $result->fetch_assoc()) {
        $products[] = array(
            "productname" => $row["productname"],
            "productprice" => $row["productprice"],
            "productdesc" => $row["productdesc"],
            "productimage" => $row["productimage"],
        );
    }

    // Send the JSON response
    echo json_encode($products);
} else {
    // No products found in the database
    $response = array("success" => false, "message" => "No products found");
    echo json_encode($response);
}

$conn->close();
?>
