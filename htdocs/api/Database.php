<?php
error_reporting(0);
ini_set("display_errors", 0);
class Database{
    private $connection;
    private $table;
    function __construct(){
        require_once("./config/config.php");
        $hostname=HOSTNAME;
        $user=USER;
        $password=PASSWORD;
        $port=PORT;
        $database=DATABASE;
        $this->table=TABLE;
        $this->connection= new mysqli($hostname,$user,$password,$database,$port);
    }
    function VisitorAdd(string $nesne){
        $query="INSERT INTO `".$this->table."`(hash) VALUES ('".$nesne."')";
        $this->connection->query($query);
    }
    function VisitorCount(){
        $query="SELECT id FROM `".$this->table."` ORDER BY id DESC LIMIT 1;";
        $result=$this->connection->query($query);
        return $result->fetch_row()[0];
    }

    function __destruct(){
        $this->connection->close();
        unset($this->connection,$this->table);
    }
}
?>