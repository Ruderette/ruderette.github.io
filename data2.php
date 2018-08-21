<?php
function console_log( $data ){
    echo '<script>';
    echo 'console.log('. json_encode( $data ) .')';
    echo '</script>';
  }

$y = intval($_GET['year']);
echo $y;
console_log($y);
?>