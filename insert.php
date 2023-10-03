<?php
include("connection.php");
$sql = "insert into `student` values(321,'asdf','asdf')";
$result = $conn->query($sql);
if($result!=0)
echo "Inserted Successfully";
else
echo "Insert Unsuccessful";
$conn->close();

?>