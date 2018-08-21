<?php
	header('Content-Type: application/json');
	

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
$result = pg_query($dbconn, "SELECT to_char(release_date, 'YYYY') as year, count(*) as nb_of_releases from game_details
								where to_char(release_date, 'YYYY') < '2020'  
								group by year 
								order by year DESC LIMIT 5 ") or exit("Error with quering database");
$array = array();
while ($row = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    $array[] = $row;
}
$data=json_encode($array);
echo $data;
pg_free_result($result);
pg_close($dbconn);
?>

