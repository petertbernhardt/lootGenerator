<?php
	// Connect to DB
	$mysqli_connection = new MySQLi('localhost', 'peterb22_itemGen', 'bD2g^gS^S!BQ', 'peterb22_itemGenerator');
	// Check the connection
	if($mysqli_connection->connect_error){
		echo "Not connected, error: ".$mysqli_connection->connect_error;
	} else {
		echo "Connected.";
	}
	// Print out all post variables
	var_dump($_GET);
	
	mysqli_close($mysqli_connection);
?>