<?php
$q = intval($_GET['q']);

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
$sql=  "select app_id, title, release_date, description, game_url, image_url, sentiment, price, date_trial, developer, publisher, genre from game_details  "  ; 
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
    $e['sentiment'] = $row ['sentiment'];
    $e['price'] = $row ['price'];
    $e['date_trial'] = $row ['date_trial'];
    $e['developer'] = $row ['developer'];
    $e['publisher'] = $row ['publisher'];
    $e['genre'] = $row ['genre'];
  
    // Merge the event array into the return array
    array_push($events, $e);

}

// Output json for our calendar
echo json_encode($events);
exit();

   


?>


