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
$sql1=  "select count(*) as nb_of_releases from game_details where to_char(release_date, 'YYYY') < '2020'  
LIMIT 10 ";
$result1 = pg_query($dbconn,$sql1);
$array1 = array();
while($row1 = pg_fetch_array($result1, null, PGSQL_ASSOC)) {

echo $row1['nb_of_releases'];}

pg_close($dbconn);
?>