<?php
// mysql
$db = new PDO('mysql:host=localhost;dbname=test','admin','1234');
$sql = $db->prepare('insert into uorder(product1,product2,product3,product4,product5,product6,SumMoney) values(:pd1,:pd2,:pd3,:pd4,:pd5,:pd6,:sum)');
$i = 0;
foreach($_POST as $key => $value){
    $i++;
    if($key == 'hid')break;
    $sql->bindValue('pd'."$i",$value);
}
$sql->bindValue('sum',$_POST['hid']);
$sql->execute();
header('location:shopping_cart.html');