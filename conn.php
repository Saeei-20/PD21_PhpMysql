<html>
<body>
<h1>Data collected</h1>
<?php
// Database connection details
$host = "localhost"; // Change to your database host
$username = "saeei"; // Change to your database username
$password = "abc"; // Change to your database password
$database = "test"; // Change to your database name

// Create a database connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the POST request
$name = $_POST["name"];
$password = $_POST["password"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$state = $_POST["state"];
$city = $_POST["city"];
$country = $_POST["country"];
$pincode = $_POST["pincode"];

// SQL query to insert data into the database
$sql = "INSERT INTO data (name, password, email, phone, state, city, country, pincode)
        VALUES ('$name', '$password', '$email', '$phone', '$state', '$city', '$country', '$pincode')";

if ($conn->query($sql) === TRUE) {
    echo "Data saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
</body>
</html>



