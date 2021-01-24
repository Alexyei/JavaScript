// async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status === 200) {
//         return await response.json();
//     }
//
//     throw new HttpError(response);
//
// }
//
// loadJson('no-such-user.json') // (3)
//     .catch(console.log); // Error: 404
//
// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }
//
// // function loadJson(url) {
// //     return fetch(url)
// //         .then(response => {
// //             if (response.status == 200) {
// //                 return response.json();
// //             } else {
// //                 throw new HttpError(response);
// //             }
// //         })
// // }
//
// // Запрашивать логин, пока github не вернёт существующего пользователя.
// async function demoGithubUser() {
//     do {
//         let name = prompt("Введите логин?", "iliakan");
//         try {
//             let user = await loadJson(`https://api.github.com/users/${name}`);
//             console.log(`Полное имя: ${user.name}.`);
//             return user;
//         } catch (err) {
//             if (err instanceof HttpError && err.response.status === 404) {
//                 console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
//             } else {
//                 throw err;
//             }
//         }
//
//     } while (true);
// }
//
// demoGithubUser();

async function wait() {
   // console.log(1);
    await new Promise(resolve => setTimeout(resolve, 1000));
    //console.log(2);
    return 10;
}

function f() {
    // ...что здесь написать?
    // чтобы вызвать wait() и дождаться результата "10" от async–функции
    // не забывайте, здесь нельзя использовать "await"
    // console.log(3);
    // let x = wait().then(res=>{ console.log(4);console.log(res); console.log(5);});
    // console.log(6);
    // ley = 7;
    wait().then(console.log);
}
f();

function f1(){
    //(async ()=>console.log(await wait()))();
    (async ()=>{
        let res = await wait();
        console.log(res);
    })()
}
f1();
