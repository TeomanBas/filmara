<?php 
function api_query($data){
    $film = json_decode($data);
    $title=$film->tip;
    require_once("./config/config.php");
    $domain = DOMAIN;
    $api_key = API_KEY;
    $parameters = "api_url_parameters";
    if($title=="t"){
        $url=$domain."?apikey=".$api_key."&t=".$film->film.$parameters;
    }else{
        $url=$domain."?apikey=".$api_key."&s=".$film->film;
    }
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json"));
    $response = curl_exec($ch);
    curl_close($ch);
    unset($domain,$api_key,$url,$data,$film,$title);
    print_r($response);
}
?>