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
$result = pg_query($dbconn, "SELECT count(*) as nb, name_tag from game_details
join game_tag on game_tag.id_game = game_details.id_game
join tags on game_tag.id_tag = tags.id_tag
group by name_tag
order by nb DESC LIMIT 10 ") or exit("Error with quering database");
$array = array();
while ($row = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    $array[] = $row;
}
$data=json_encode($array);
echo $data;
pg_free_result($result);
pg_close($dbconn);
?>