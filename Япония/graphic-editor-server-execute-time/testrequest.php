<?php
$start = microtime(true);
$data = json_decode(file_get_contents("php://input"),true);

$json_obj = (object) [
    'app_version' => 0.4,
    'api_level' => '537.36',
    'device' => $data["version"],
    'input_type' => 0,
    'options' => 'enable_pre_space',
    'requests' => [
        (object)[
            'writing_guide' => (object)[
                'writing_area_width'=> $data["width"],
                'writing_area_height'=> $data["height"]
            ],
            'pre_context'=> '',
                    'max_num_results'=> $data["resultCount"],
                    'max_completions'=> 0,
                    'language'=> 'ja',
                    'ink'=> $data["ink"]
        ]
    ]
];

$data_string = json_encode($json_obj,JSON_UNESCAPED_UNICODE);

$startPost = microtime(true);
$curl = curl_init('https://inputtools.google.com/request?itc=ja-t-i0-handwrit&app=translate');
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
// Принимаем в виде массива. (false - в виде объекта)
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($data_string))
);
$result = curl_exec($curl);
curl_close($curl);
$timePost = 'Время выполнения скрипта: '.round(microtime(true) - $startPost, 4).' сек.';

$result = json_decode($result);
if ($result[0] === 'SUCCESS') {
    echo json_encode([$result[1][0][1],'Время выполнения скрипта: '.round(microtime(true) - $start, 4).' сек.', $timePost]);
} else {
    echo json_encode('something went wrong');
}


