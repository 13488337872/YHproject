<?php
	header("Content-type:text/html;charset=utf-8");
	$num = $_GET['num'];
	$conn = mysql_connect("localhost","root","root");
	if($conn){
		mysql_select_db("student");
    }
    
	$result = mysql_query("select * from informat where priId='$num'",$conn);
	if(mysql_num_rows($result)>0){
		while($rows = mysql_fetch_assoc($result)){
			echo $rows['src']."".$rows['priname']."".$rows['price'];
		}
	}
	mysql_close($conn);
?>