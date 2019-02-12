	<?php
	try {
		$dbh = new PDO("mysql:host=localhost;dbname=000737859", "000737859", "19990413");
	} catch (Exception $e) {
		die("ERROR: CONNECTION FAILED {$e->getMessTimeSpan()}");
	}


	$jsonType = file_get_contents('php://input');
	$request = json_decode($jsonType,true);

	if (($request['event']) === 'searchHolder'){
		$val = $request['val'];
		$command = "SELECT id, Name, Type, Country, TimeSpan, BestMonth FROM Vaction WHERE Name LIKE '%{$val}%'";
		$stmt = $dbh->prepare($command);
		$stmt->execute();
		$result = $stmt->fetchAll();
		echo json_encode($result);
	}else{

	if ($request['event'] === 'removeList') {
		$id = $request['id'];
		$sql = "DELETE FROM Vaction WHERE id=". $id;
		$statement = $dbh->prepare($sql);
		$statement->execute();
	}

	if (($request['event']) === 'createRecord'){
		$Name = $request['Name'];
		$Type= $request['Type'];
		$Country= $request['Country'];
		$TimeSpan= $request['TimeSpan'];
		$BestMonth= $request['BestMonth'];
		$id='';
		$userParams = array($id, $Name , $Type, $Country, $TimeSpan, $BestMonth);
	  $command = "INSERT INTO Vaction (id, Name, Type, Country, TimeSpan, BestMonth) VALUES (?,?,?,?,?,?)";
	  $stmt = $dbh->prepare($command);
	  $stmt->execute($userParams);
	}
	if (($request['event']) === 'tableEdit'){
		$Name = $request['Name'];
		$Type= $request['Type'];
		$Country= $request['Country'];
		$TimeSpan= $request['TimeSpan'];
		$BestMonth= $request['BestMonth'];
		$id= $request['id'];
		$userParams = array($Name , $Type, $Country, $TimeSpan, $BestMonth);
	  $command = "UPDATE Vaction SET Name=?, Type=? , Country=?, TimeSpan=?, BestMonth=? WHERE id=". $id;
	  $stmt = $dbh->prepare($command);
	  $stmt->execute($userParams);
	}
	}
	$command = "SELECT * FROM Vaction";
	$stmt = $dbh->prepare($command);
	$stmt->execute();
	$result = $stmt->fetchAll();
	echo json_encode($result);

	?>
