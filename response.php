<?php
include("connection.php");
$year=$_POST['2010'];
class Game {
 protected $year;   
 protected $conn;
 protected $data2 = array();
 //protected $data1 = array();
 function __construct() {
 
 $db = new dbObj();
 $connString =  $db->getConnstring();
 $this->conn = $connString;
 }

 public function getGames() {
    $sql = "select app_id, title, description, game_url from game_details where to_char(release_date, 'YYYY')= '2010' Limit 25";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch game data");
    $data2 = pg_fetch_all($queryRecords);
    return $data2;
    echo $data2;
 }
 
 public function getGamesTotal2010() {
   $year = 2010;
    $sql = "select count(*) as nb_of_releases from game_details where to_char(release_date, 'YYYY')= '".$year."' ";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch game data");
    $data = pg_fetch_all($queryRecords);
    return $data;
}
public function getGamesTotal2011() {
    $year = 2011;
     $sql = "select count(*) as nb_of_releases from game_details where to_char(release_date, 'YYYY')= '".$year."' ";
     $queryRecords = pg_query($this->conn, $sql) or die("error to fetch game data");
     $data = pg_fetch_all($queryRecords);
     return $data;
 }


public function getGamesGenre() {
    $sql = "SELECT name_genre, count(*) as nb_of_genre FROM game_details gd
    join game_genre gg on gd.id_game = gg.id_game
    join genres g on g.id_genre=gg.id_genre
    where name_genre NOT LIKE '%Unknown%'
    group by  name_genre
    order by nb_of_genre DESC
    LIMIT 1";
    $queryRecords = pg_query($this->conn, $sql) or die("error to fetch game data");
    $data2 = pg_fetch_all($queryRecords);
    return $data2;
    echo $data2;
 }

}
?>

