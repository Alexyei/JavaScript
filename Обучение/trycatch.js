try {
    lalala; // ошибка, переменная не определена!
} catch(err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    //console.log(err.stack); // ReferenceError: lalala is not defined at (...стек вызовов)

    // Можем также просто вывести ошибку целиком
    // Ошибка приводится к строке вида "name: message"
    //console.log(err); // ReferenceError: lalala is not defined
}