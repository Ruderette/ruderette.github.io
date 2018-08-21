<?php
	header('Content-Type: application/json');
	
    //$y = 2018;
    
    $m = strval($_GET['month']);
    $y = strval($_GET['year']);
	
	//$m = '01';
	// establishing DB connection
	$host= "host=localhost";
	// add values for below variables according to your system
	$port= "port=5432";
	$dbname="dbname=games";
	$dbuser="user=postgres";
	$dbpwd="password=Monday.2";

	// connection string (pg_connect() is native PHP method for Postgres)
  $dbconn=pg_connect("$host $port $dbname $dbuser $dbpwd");

	// validating DB connection
  if(!$dbconn) {
		exit("There was an error establishing database connection");
}
$sql = "SELECT to_char(release_date, 'DD, Dy') as day, to_char(release_date, 'Month') as month2, to_char(release_date, 'Dy') as week, count(*) as nb_of_releases from game_details where to_char(release_date, 'YYYY') = '".$y."' and to_char(release_date, 'MM') = '".$m."' group by day, month2, week ";
$result = pg_query($dbconn,$sql); 
$array = array();
while ($row = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    $array[] = $row;
}
$data=json_encode($array);
echo $data;
pg_free_result($result);
pg_close($dbconn);
?>
