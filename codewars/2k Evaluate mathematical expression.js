function calc(expression) {
    // let names = '2/ (2 + 3) * 4.33 - -6';

    // console.log(names);

    // let re = /\s*([-+*\()/])\s*/;
    // let nameList = names.split(re);
    //
    // let chain = nameList.filter(n => n);


    let may_be_unary = true
    let numbers = [];
    let operators = [];

    function process_op1(op) {
        if ("u" in op) {
            let l = numbers.pop()
            ({
                "u+":
                    () => numbers.push(l),
                "u-":
                    () => numbers.push(-l),
            }
                [op]())
        } else {
            let r = numbers.pop()
            let l = numbers.pop()
            ({
                '+':
                    () => numbers.push(l + r),
                '-':
                    () => numbers.push(l - r),
                '*':
                    () => numbers.push(l * r),
                '/':
                    () => numbers.push(l / r)
            }
                [op]())
        }
    }

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


console.log(calc('2/ (2 + 3) * 4.33 - -6'))
console.log(calc('12* 123'))
console.log(calc('2 /2+3 * 4.75- -6'))
console.log(calc('123'))
console.log(calc('- ( - 1)'))
