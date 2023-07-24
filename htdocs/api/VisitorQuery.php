<?php 
class VisitorQuery{
    private $dbobject;
    function __construct(){
        require_once("Database.php");
        $this->dbobject = new Database;
    }
    function VisitorAdd(){
        require_once("GetUserIdentity.php");
        require_once("IdentityHash.php");
        $this->dbobject->VisitorAdd(IdentityHash(GetUserIdentity()));
    }
    function VisitorCount(){
        $response= new stdClass;
        $response->visitquery= $this->dbobject->VisitorCount();
        $response= json_encode($response);
        print_r($response);
    }
    function __destruct(){
        unset($this->dbobject);
    }
}
?>