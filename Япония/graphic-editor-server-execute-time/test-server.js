let t0;
let serverBtn = document.getElementById("test-server");

function testRequest() {
    //console.log(window.storage.data);
    testSendData();
}

serverBtn.addEventListener("click", testRequest);

function testSendData() {
    t0 = performance.now();
    const data = {
        version: window.clientInformation.appVersion,
        width: window.storage.width,
        height: window.storage.height,
        resultCount: 10,
        ink:  window.storage.data
    };

    // console.log(JSON.stringify(data));
    fetch('testrequest.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok)
                response.json().
                then(
                    result => writeResult1(result));
            else
                console.log("error in answer");
        });
}

function writeResult1(result){
    console.log("Ответ получен");
    console.log(result);
    console.log("Время выполнения: "+(performance.now() - t0).toFixed(4)+" милисекунд");
}
