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
        print($this->dbobject->VisitorCount());
    }
    function __destruct(){
        unset($this->dbobject);
    }
}
?>