<!DOCTYPE html>
<html>
<head>
<style>

tr .spnTooltip {
    z-index:10;display:none; padding:14px 20px;
    margin-top:-30px; margin-left:28px;
    width:300px; line-height:16px;
    
}

tr:hover .spnTooltip{
    display:block; position:absolute; color:#fff;
    border:1px solid black; background:#1496bb; font-size:14px;

 
}
tr:hover .spnTooltip #tooltip-image{
    display:flex;
    align-items:baseline;
    width:100%;
    height:100px
    padding:0px;
}
 
.callout {z-index:20;position:absolute;top:30px;border:0;left:-12px;}
</style>
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
$sql=  "select app_id, title, description, game_url, image_url, name_dev, name_publisher, price from game_details gd  join game_dev gdev on gdev.id_game = gd.id_game
join developers d on d.id_dev = gdev.id_dev
join game_publisher gp on gp.id_game = gd.id_game
join publishers p on p.id_publisher = gp.id_publisher where to_char(release_date, 'YYYY') = '".$q."' and to_char(release_date, 'MM')= '02' LIMIT 10"; 
$result = pg_query($dbconn,$sql);
$array = array();
echo "<tbody>";
while ($row = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    echo "<tr id =" . $row['app_id'] .">";
    echo "<td> <span class='spnDetails'>" . $row['app_id'] . "</span>
               <span class='spnTooltip'>
                <span class='imageHeader'><img id='tooltip-image' src=".$row['image_url']."/></span>
               <strong>". $row['title'] ."</strong>
               <br>Description : ". $row['description'] ."
               <br> Developer : ". $row['name_dev'] ."
               <br> Publisher : ". $row['name_publisher'] ."
               <br> Price : ". $row['price'] ."</span></td>";
 
    echo "<td><a href=". $row['game_url'] .">" . $row['title'] . "</a></td>";
  

    echo "</tr>";
    echo "</tbody>";
}

?>
</body>
</html>