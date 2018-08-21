<!DOCTYPE html>
 

<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/Chart.min.js"></script>
  <!-- Bootstrap core CSS -->
  <link href="dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Bootstrap theme -->
  <link href="dist/css/bootstrap-theme.min.css" rel="stylesheet">
  <link href="dist/css/bootstrap.css" rel="stylesheet">
  <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
  <link href="assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
  <script type="text/javascript" src="buttons.js" async></script>
  <!-- Custom styles for this template -->
  <link href="theme.css" rel="stylesheet">
</head>
<body>
<div class="row">
  <div class = "left-column" id="chart-container">
  <canvas id="graphCanvas"></canvas>  
  </div>
  
    <div class="card-columns" id="card-columns style="width: 100em;"">
      <div class="card bg-primary">
        <div class="card-body text-center">
          <img src="https://png.icons8.com/dotty/80/f39c12/total-sales-1.png" class="card-img-bottom">
          <p class="card-text" img src="https://png.icons8.com/dotty/80/f39c12/total-sales-1.png">Some text inside the first card</p>
        </div>
      </div>
      <div class="card bg-warning">
        <div class="card-body text-center">
          <p class="card-text">Some text inside the second card</p>
        </div>
      </div>
      <div class="card bg-success">
        <div class="card-body text-center">
          <p class="card-text">Some text inside the third card</p>
        </div>
      </div>
      <div class="card bg-danger">
        <div class="card-body text-center">
        <?php foreach($gmsGenre as $key => $gameGenre) :?>
          <p class="card-text"><?php echo $gameGenre['nb_of_genre'] ?></p>
          <p class="card-text"><?php echo $gameGenre['name_genre'] ?> Games</p>
          <?php endforeach;?>
        </div>
      </div> 
      <div class="card bg-light" >
        <div class="card-body text-center">
        
          <p class="card-text" id="releasesperyear" > Games</p>
          
        </div>
      </div>
      <div class="card bg-info">
        <div class="card-body text-center" id="testing">
        <?php foreach($gmsTotal2010 as $key => $gameTotal2010) :?>
          <p class="card-text">lalalla<?php echo $gameTotal2010['nb_of_releases'] ?> </p>
          <?php endforeach;?>
        </div>
      
      </div> 
    </div>
</div>  

    <div class="page-header">
        <h1></h1>
      
        <p></p>
        <form name="form" action ="index.php" method="post">
<input type="submit" name="2010" value="2010" /> 
<input type="submit" name="2011" value="Button 2" /> 
<input type="submit" name="2012" value="Button 3" /> 
<input type="submit" name="2013" value="Button 4" />

</form> 
        <input type="submit" id = "button-2010">
        <input type="button" value="2010" class="btn btn-lg btn-default" data-toggle="collapse" data-target="#2010" aria-expanded="false" id="btn2010" type="submit" onclick="show2010">2010</button> 
        <button type="button" class="btn btn-lg btn-primary" data-toggle="collapse" data-target="#2011" aria-expanded="false" id="btn2011" >2011</button>
        <button type="button" class="btn btn-lg btn-success" data-toggle="collapse" data-target="#2010" aria-expanded="false">2012</button>
        <button type="button" class="btn btn-lg btn-info" data-toggle="collapse" data-target="#2010" aria-expanded="false">2013</button>
       
        <div id ="2010" class ="collapse">
            <button type="button" class="btn btn-lg btn-success" data-toggle="collapse" data-target="#Q1" aria-expanded="false" id="btnQ1">Q1</button>
            <button type="button" class="btn btn-lg btn-success"data-toggle="collapse" data-target="#Q2" aria-expanded="false" >Q2</button>
            <button type="button" class="btn btn-lg btn-success"data-toggle="collapse" data-target="#Q3" aria-expanded="false" >Q3</button>
            <button type="button" class="btn btn-lg btn-success"data-toggle="collapse" data-target="#Q4" aria-expanded="false" >Q4</button>   
        </div>
        <div id ="2011" class ="collapse">
            <button type="button" class="btn btn-lg btn-primary" data-toggle="collapse" data-target="#Q1" aria-expanded="false">Q1</button>
            <button type="button" class="btn btn-lg btn-primary"data-toggle="collapse" data-target="#Q2" aria-expanded="false">Q2</button>
            <button type="button" class="btn btn-lg btn-primary"data-toggle="collapse" data-target="#Q3" aria-expanded="false">Q3</button>
            <button type="button" class="btn btn-lg btn-primary"data-toggle="collapse" data-target="#Q4" aria-expanded="false">Q4</button>   
        </div>
        <div id ="Q1" class ="collapse">
            <button type="button" class="btn btn-lg btn-primary" >Jan</button>
            <button type="button" class="btn btn-lg btn-success">Feb</button>
            <button type="button" class="btn btn-lg btn-info">March</button>
        </div>
        <div id ="Q2" class ="collapse">
            <button type="button" class="btn btn-lg btn-primary" aria-expanded="false">April</button>
            <button type="button" class="btn btn-lg btn-success">May</button>
            <button type="button" class="btn btn-lg btn-info">June</button>
        </div>
        <div id ="Q3" class ="collapse">
            <button type="button" class="btn btn-lg btn-primary" aria-expanded="false">July</button>
            <button type="button" class="btn btn-lg btn-success">August</button>
            <button type="button" class="btn btn-lg btn-info">September</button>
        </div>
        <div id ="Q4" class ="collapse">
            <button type="button" class="btn btn-lg btn-primary">October</button>
            <button type="button" class="btn btn-lg btn-success">November</button>
            <button type="button" class="btn btn-lg btn-info">December</button>
        </div>
      </div>
    </div>
    <div class="page-header">
        <h1>Game Releases</h1>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="table" >
            <thead>
              <tr>
                <th>App Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Game URL</th>
              </tr>
            </thead>
        <tbody>
            <?php foreach($gmsList as $key => $gameList) :?>
            <tr>
                <td><?php echo $gameList['app_id'] ?></td>
                <td><?php echo $gameList['title'] ?></td>
                <td><?php echo $gameList['description'] ?></td>
                <td><?php echo $gameList['game_url'] ?></td>
            </tr>
            <?php endforeach;?>
        </tbody>
            </table>
        </div>  
      </div>
      
    
	 


      <?php 

         if (isset($_POST['2010'])){
           
          echo("you clicked button 1");
          
          foreach($gmsTotal2011 as $key => $gameTotal2011) :?>
            
             <p id="releasesperyear"><?php echo $gameTotal2011['nb_of_releases'];?></p>  

             <?php endforeach;     
          }
          if (isset($_POST['2011'])){
            
           echo("you clicked button 2");
           foreach($gmsTotal2011 as $key => $gameTotal2011) :
              echo $gameTotal2011['nb_of_releases'];  
              endforeach; }  
          
          ?>
           
    
 


</body>
</html>