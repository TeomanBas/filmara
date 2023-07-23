<?php 
function api_query($data){
    require_once("./VisitorQuery.php");
    $visitor=new VisitorQuery;
    $visitor->VisitorAdd();
    $decodedata = json_decode($data);
    if($decodedata->visitquery=="visitor"){
        $visitor->VisitorCount();
    }else{
        require_once("./film_query.php");
        film_query($decodedata);
    }
}
?>