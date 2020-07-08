<?php
/*параметры Сервера с БД*/
$servername = 'localhost';
$username = 'root';
/*$password = 'password';*/


/*Подключение к серверу с БД*/
$link = mysql_connect($servername,$username);

/*Выбор БД на сервере*/
$dbname ='cookies_bd';
mysql_select_db($dbname,$link);

/*Выполнение запроса к БД*/
$resp = mysql_query('SELECT * FROM cookie_bd');

/*Помещение результата запроса в массив*/
$data = array();
while($row = mysql_fetch_assoc($resp)){
    $data[]=$row;
}

/*Освободить ресурсы запросы*/
mysql_free_result($resp);

/*Закрыть соединение*/
mysql_close($link);

/*Вернуть данные в формате JSON*/
$json_str=json_encode($data);
echo $json_str.$_GET['bd_array'];
?>