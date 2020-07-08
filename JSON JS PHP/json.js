
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