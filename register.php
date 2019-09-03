<?php
	header("Content-type:text/html;charset=utf-8");
	$text = $_GET["name"];
	$pwd = $_GET["pwd"];
	$conn = mysql_connect("localhost","root","root");
	if($conn){
		mysql_select_db("student");
	}
	$result = mysql_query("select * from admin where username = '$text' and userpwd = '$pwd'",$conn);
	$result_row = mysql_num_rows($result);
	if($result_row == 1){
		echo 0;
	}else{
		echo 1;
	}
	mysql_close($conn);
?>