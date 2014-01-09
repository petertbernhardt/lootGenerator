<?php
	echo var_dump($_POST);
	
	/*
	// Connect to DB
	$mysqli_connection = new MySQLi('localhost', 'peterb22_itemGen', 'bD2g^gS^S!BQ', 'peterb22_itemGenerator');
	// Check the connection
	if($mysqli_connection->connect_error){
		print "Not connected, error: ".$mysqli_connection->connect_error;
		exit();
	} else {
		print "Connected.";
	}
	$result = mysqli_query($mysqli_connection,"SELECT * FROM TestTable");
	while($row = mysqli_fetch_array($result))
	  {
	  print $row['FirstName'] . " " . $row['LastName'];
	  print"<br>";
	  }
	mysqli_close($mysqli_connection);
	print($_REQUEST["data"]);
	*/
?>