function calc1(expression) {
    // let names = '2/ (2 + 3) * 4.33 - -6';

    // console.log(names);

    // let re = /\s*([-+*\()/])\s*/;
    // let nameList = names.split(re);
    //
    // let chain = nameList.filter(n => n);


    let may_be_unary = true
    let numbers = [];
    let operators = [];


    function priority(op) {
        switch (op) {
            case "u+":
            case "u-":
                return 3;
            case "*":
            case "/":
                return 2;
            case "+":
            case "-":
                return 1;
        }
    }

    function process_op(op) {
        switch (op) {
            case "u+":
                break;
            case  "u-":
                numbers.push(-numbers.pop())
                break;
            default:
                let r = numbers.pop()
                let l = numbers.pop()
                switch (op) {
                    case "+":
                        numbers.push(l + r);
                        break;
                    case "-":
                        numbers.push(l - r);
                        break;
                    case "*":
                        numbers.push(l * r);
                        break;
                    case "/":
                        numbers.push(l / r);
                        break;
                }
                break;

        }
    }


    expression.split(/\s*([-+*\()/])\s*/).filter(n => n).forEach((item) => {
        if (+item) {
            numbers.push(+item)
            may_be_unary = false
        } else if (item === "(") {
            operators.push(item)
            may_be_unary = true
        } else if (item === ")") {
            while (operators.slice(-1)[0] !== '(')
                process_op(operators.pop())
            operators.pop()
            may_be_unary = false
        } else {
            if (may_be_unary && (item === "+" || item === "-"))
                item = "u" + item

            while (operators && (
                (!item.startsWith("u") &&
                    priority(operators.slice(-1)[0]) >= priority(item))
                //     or
                //     (len(expressionList[i]) == 2
                // and
                // priority(operators[-1]) > priority(expressionList[i])
            ))
                process_op(operators.pop())
            operators.push(item)
            may_be_unary = true
        }
    })

    while (operators.length)
        process_op(operators.pop())

    return numbers.pop()
}


let calc = function (expression) {
    // токены \d+\.\d+ - float, \d+ - int, [-+*/\(\)] - operators
    // \g - найти все, а не только первый
    // isNaN(t) ? t : Number(t) - если токен являеться числом, привести его к числовому типу
    let tokens = expression.match(/\d+\.\d+|\d+|[-+*/\(\)]/g).map(function(t){ return isNaN(t) ? t : Number(t); });

    // если token === sym, вернуть это значене и удалить из токенов
    function accept(sym){ return (tokens[0] === sym) && tokens.shift() }
    // если token это число, вернуть это значене и удалить из токенов
    function acceptNumber(){ return !isNaN(tokens[0]) && tokens.shift() }
    // если token === одному из значений arr, вернуть это значене и удалить из токенов
    function acceptAny(arr){ return arr.some( function(a){ return a == tokens[0]} ) && tokens.shift() }

    // выполнить бинарную операцию, +-*/
    function doOp(x, op, y){ return [function(a,b){ return a + b;}, function(a,b){ return a - b; }, function(a,b){ return a * b; }, function(a,b){ return a / b; }][("+-*/".indexOf(op))](x,y); }

    // после оператора может идти выражение в скобках или число
    // данная функция возвращает "юнит" (число), если юнит - это выражение в скобках, оно вычисляеться, и становиться числом
    function unit(){ return accept('(') ? (e = expr(), accept(')'), e) : acceptNumber(); }
    // список токенов может начинаться с числа, ун.минуса, ун.плюса, откр.скобки
    // если список токенов начинается с минуса, инвертировать следующие за ним выражение
    // если список на чинается с плюса, удалить плюс
    function unary(){ return accept('-') ? -unit() : (accept('+'), unit()); }
    // получение множителя
    // левая операнд (x)
    // пока числа соеденены * или / произвести данные операции
    // вернуть результат операций
    function factor(){ let x = unary(); for (; op = acceptAny(['*','/']); x = doOp(x, op, unary())); return x; }
    // вычисление выражения
    // левая операнд (x)
    // пока числа соеденены + или - произвести данные операции
    // вернуть результат операций
    function expr(){ let x = factor(); for (; op = acceptAny(['+','-']); x = doOp(x, op, factor())); return x; }
    return expr();
};

console.log (2 && 1)
console.log(calc('2/ (2 + 3) * 4.33 - -6'))
console.log(calc('12* 123'))
console.log(calc('2 /2+3 * 4.75- +6'))
console.log(calc('2 /2+3 * 4.75- 6'))
console.log(calc('2 /2+3 * 4.75- -6'))
console.log(calc('123'))
console.log(calc('- ( - 1)'))
console.log(calc('+ ( + 1)'))
console.log(calc('+2 + ( + 1)'))
