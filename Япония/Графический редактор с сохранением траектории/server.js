let serverBtn = document.getElementById("server");
// Количество возвращаемых результатов (точность распознавания)
// не работает, возвращается 10 результатов
let resultCount = 7;

//console.log(window.clientInformation)
function recognitionRequest() {
    //console.log(window.storage.data);
    sendData();
}

serverBtn.addEventListener("click", recognitionRequest);

function sendData() {
    const data = {
        app_version: 0.4,
        api_level: '537.36',
        device:
        window.clientInformation.appVersion,
        input_type: 0,
        options: 'enable_pre_space',
        requests: [
            {
                writing_guide: {
                    writing_area_width: window.storage.width,
                    writing_area_height: window.storage.height
                },
                pre_context: '',
                max_num_results: resultCount,
                max_completions: 0,
                language: 'ja',
                ink: window.storage.data
            }
        ]
    };

   // console.log(JSON.stringify(data));
    fetch('https://inputtools.google.com/request?itc=ja-t-i0-handwrit&app=translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) response.json().then(result => writeResult(result)); else console.log("error in answer");
        });
}

function writeResult(result){
    if (result[0] === 'SUCCESS') {
        console.log(result[1][0][1]);
    } else {
        console.error('something went wrong');
}}
