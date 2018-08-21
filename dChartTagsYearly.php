<?php
	header('Content-Type: application/json');
	
	$y = strval($_GET['year']);
	
	
	//$x = '2010';
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
$sql = "SELECT count(*) as nb, name_tag from game_details
join game_tag on game_tag.id_game = game_details.id_game
join tags on game_tag.id_tag = tags.id_tag
where to_char(release_date, 'YYYY') = '".$y."'
group by name_tag
order by nb DESC LIMIT 10 ";
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