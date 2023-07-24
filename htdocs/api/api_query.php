<?php 
function api_query($data){
    $decode=json_decode($data);
    if(isset($decode->visitquery)){
        require_once("./VisitorQuery.php");
        $add = new VisitorQuery();
        $add->VisitorAdd();
        $add->VisitorCount();
    }else{
        require_once("./film_query.php");
        film_query($decode);
    }
}
?>