<!DOCTYPE html>
<html>
<head>

</head>
<body>

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
    $sql1 = "SELECT name_genre, count(*) as nb_of_genre FROM game_details gd
    join game_genre gg on gd.id_game = gg.id_game
    join genres g on g.id_genre=gg.id_genre
    where name_genre NOT LIKE '%Unknown%' and to_char(release_date, 'YYYY')= '".$q."' 
    group by  name_genre
    order by nb_of_genre DESC
    LIMIT 1"; 
$result1 = pg_query($dbconn,$sql1);
$array1 = array();
while($row1 = pg_fetch_array($result1, null, PGSQL_ASSOC)) {

//echo $row1['name_genre'];
echo $row1['nb_of_genre'];}
pg_free_result($result);
pg_close($dbconn);
?>
</body>
</html>