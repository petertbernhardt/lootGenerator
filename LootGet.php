<?php
	$mysqli_connection = new MySQLi('localhost', 'peterb22_itemGen', 'bD2g^gS^S!BQ', 'peterb22_itemGenerator');
	if($mysqli_connection->connect_error){
		echo "Not connected, error: ".$mysqli_connection->connect_error;
	} else {
		echo "Connected.";
	}
	var_dump($_GET);
?>