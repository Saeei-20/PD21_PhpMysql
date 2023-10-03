<?php
include("connection.php");
$sql = "SELECT * FROM `student`";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  echo "<table><tr><th>PRN</th><th>Username</th><th>Password</th></tr>";

  while($row = $result->fetch_assoc()){
    echo "<tr>";
    echo "<td>".$row['PRN']."</td>";
    echo "<td>".$row['Username']."</td>";
    echo "<td>".$row['Password']."</td>";
    echo "</tr>";
}
echo "</table>";
}
$conn->close();

?>