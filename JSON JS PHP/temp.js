var phpquery = "<?php\
/*параметры Сервера с БД*/\
$servername = 'VAIO';\
/*$username = 'username';\
$password = 'password';*/\
/*Подключение к серверу с БД*/\
$link = mssql_connect($servername);\
/*Выбор БД на сервере*/\
$dbname ='cookie_bd';\
mssql_select_db($dbname,$link);\
/*Выполнение запроса к БД*/\
$resp = mssql_query('SELECT * FROM cookies_sales');\
/*Помещение результата запроса в массив*/\
$data = array();\
while($row = mssql_fetch_assoc($resp)){\
    $data[]=$row;\
}\
/*Освободить ресурсы запросы*/\
mssql_free_result($resp);\
/*Закрыть соединение*/\
mssql_close($link);\
/*Вернуть данные в формате JSON*/\
echo json_encode($data);\
?>";
//console.log(phpquery);

$.ajax({
type: 'GET',                   // тип запроса
    url: 'json.php',               // отправляем запрос на страницу test.php
    data: { bd_array: 'null' }})        // данные, которые будут переданы с запросом
    .done(function(data) {         // объявляем обработчик для принятых данных
        console.log(data);
    })
    .fail(function() {             // объявляем обработчик для ошибок
        alert('error');
    })