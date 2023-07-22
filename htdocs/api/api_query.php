<?php 
function api_query($data){
    $decodedata = json_decode($data);
    if($decodedata->visitquery=="visitor"){
        require_once("./visitor_query.php");
        visitor_query();
    }else{
        require_once("./film_query.php");
        film_query($decodedata);
    }
}

?>