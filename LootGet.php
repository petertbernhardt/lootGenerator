<?php
	//echo var_dump($_POST);
	
	// Connect to DB
	$mysqli_connection = new MySQLi('localhost', 'peterb22_itemGen', 'bD2g^gS^S!BQ', 'peterb22_itemGenerator');
	// Check the connection
	if($mysqli_connection->connect_error){
		print "Not connected, error: ".$mysqli_connection->connect_error;
		exit();
	} else {
		print "Connected.";
	}
	// $result = mysqli_query($mysqli_connection,"SELECT * FROM TestTable");
	$result = $mysqli_connection->query("SELECT * FROM TestTable");
	$rows = array();
	while ($row = $result->fetch_assoc()) {
		array_push($rows, $row);
	}
	print json_encode($rows);
	mysqli_close($mysqli_connection);
?>