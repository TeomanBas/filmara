<?php 
$data = file_get_contents("php://input");
if (!empty($data)){
    require_once("./api_query.php");
    api_query($data);
}else{
    echo "oops";
}
?>