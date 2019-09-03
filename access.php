<?php
	header("Content-type:text/html;charset=utf-8");
	$text = $_GET["username"];
	$pwd = $_GET["userpwd"];
	$conn = mysql_connect("localhost","root","root");
	mysql_select_db("student");
	$result = mysql_query("select * from admin where username='$text'",$conn);
	
	if(mysql_num_rows($result)==1){
		
	}else{
		mysql_query("insert into admin values('$text','$pwd')",$conn);
		echo 0;
	}
	mysql_close($conn);
	
?>