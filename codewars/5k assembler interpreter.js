let registers;
let currentCommand;

//flags
let jump = false;

function simple_assembler(program) {
    registers = {};
    currentCommand = 0;

    while (currentCommand < program.length) {
        execute(program[currentCommand].split(" "));
        if (jump) {
            jump = false;
            continue;
        }
        ++currentCommand;
    }
    return registers;
}

function execute(command) {
    switch (command[0]) {
        case "mov":
            registers[command[1]] = (command[2] in registers) ? registers[command[2]] : +command[2]; //registers[command[2]] || +command[2];
            break;
        case "inc":
            ++registers[command[1]];
            break;
        case "dec":
            --registers[command[1]];
            break;
        case "jnz":
            if ((command[1] in registers) ? registers[command[1]] : +command[1]) {
                currentCommand += (command[2] in registers) ? registers[command[2]] : +command[2];
                jump = true;
            }
            break;
    }
}

console.log(simple_assembler(['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a']))
console.log(simple_assembler(['mov a -10', 'mov b a', 'inc a', 'dec b', 'jnz a -2']))