<?php 
function IdentityHash($UserIdentity){
    $Hash = hash("sha256", $UserIdentity);
    return $Hash;
}
?>