let user = {
    firstName: "Вася"
};

let admin = {
    firstName: "Петя"
};

function func(phrase) {
    console.log(phrase + ', ' + this.firstName);
}

// привязка this к user
let funcUser = func.bind(user);

funcUser("Привет"); // Привет, Вася (аргумент "Привет" передан, при этом this = user)
funcUser.call(admin,"Пока");
funcUser.apply(admin,["Пока"]);
funcUser.bind(admin)("Привет");

function askPassword(ok, fail) {
    let password = "rockstar";
    if (password == "rockstar") ok();
    else fail();
}

let user1 = {
    name: 'John',

    login(result) {
        console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

askPassword(user1.login.bind(user1,true),user1.login.bind(user1,false)); // ?
