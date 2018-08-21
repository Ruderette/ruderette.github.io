<?php
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
    exit("There was an error establishing database connection");}
    
$select = "select app_id, title, release_date, description, game_url, image_url from game_details  ";
$join = "join game_genre on game_genre.id_game = game_details.id_game
join genres on genres.id_genre = game_genre.id_genre ";
$where = "where";
$order = "";

$opts = isset ($_POST['filterOpts'])? $_POST['filterOpts'] : array('');
if (in_array("Action", $opts)){
$where .= " name_genre Like 'Adventure' ";
}
$sql = $select . $join . $where;


$result = pg_query($dbconn,$sql);
$events= array();




while( $row = pg_fetch_array($result, null, PGSQL_ASSOC)){
    $e = array();
    $e['id'] = $row['app_id'];
    $e['description'] = $row['description'];
    $e['title'] = $row['title'];
    $e['start'] = $row['release_date'];
    $e['end'] = $row['release_date'];
    $e['allDay'] = true;
    $e['gameUrl'] = $row ['game_url'];
    $e['gameImg'] = $row ['image_url'];

    // Merge the event array into the return array
    array_push($events, $e);

}


// Output json for our calendar
echo json_encode($events);
//console.log(json_encode($events)); 
exit();

  



   


?>