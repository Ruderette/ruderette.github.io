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
<body>

          <div class="row">
              <div class="col-lg-4">
                  <div class="panel panel-default">
                      <div class="panel-heading">
                          Month :
                      </div>
                      <!-- /.panel-heading -->
                      <div class="panel-body">
                          <div class="table-responsive table-bordered table-hover">
                              <table class="table ">
                                  <thead>
                                      <tr>
                                          
                                          <th>app Id</th>
                                          <th>Title>
                                         
                                      </tr>
                                  </thead>
                                  
                              
                          </div>
                          <!-- /.table-responsive -->
                      </div>
                      <!-- /.panel-body -->
                  </div>
                  <!-- /.panel -->
              </div>
<?php
$r= strval($_GET['r']);
$y = intval($_GET['y']);
echo $r;
echo $y;


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
$sql2 =  "SELECT app_id, title, description, game_url, image_url, name_dev, name_publisher, price from game_details gd  join game_dev gdev on gdev.id_game = gd.id_game
join developers d on d.id_dev = gdev.id_dev
join game_publisher gp on gp.id_game = gd.id_game
join publishers p on p.id_publisher = gp.id_publisher where to_char(release_date, 'YYYY') = '".$y."' and to_char(release_date, 'MM')= '".$r."' LIMIT 10"; 
$result2 = pg_query($dbconn,$sql2);
$array = array();

echo "<tbody>";
while ($row2 = pg_fetch_array($result2, null, PGSQL_ASSOC)) {
    echo "<tr id =" . $row2['app_id'] .">";
    echo "<td> <span class='spnDetails'>" . $row2['app_id'] . "</span>
               <span class='spnTooltip'>
                <span class='imageHeader'><img id='tooltip-image' src=".$row2['image_url']."/></span>
               <strong>". $row2['title'] ."</strong>
               <br>Description : ". $row2['description'] ."
               <br> Developer : ". $row2['name_dev'] ."
               <br> Publisher : ". $row2['name_publisher'] ."
               <br> Price : ". $row2['price'] ."</span></td>";
 
    echo "<td><a href=". $row2['game_url'] .">" . $row2['title'] . "</a></td>";
  

    echo "</tr>";
    echo "</tbody>";
}

?>


</body>
</html>