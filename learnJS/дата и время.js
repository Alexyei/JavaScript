console.log(new Date("2012-02-20T03:12:00.0"))
console.log(new Date(2012, 1, 20, 3, 12))

function getWeekDay(date){
    return new Map([
        [0, "ВС"],
        [1, "ПН"],
        [2, "ВТ"],
        [3, "СР"],
        [4, "ЧТ"],
        [5, "ПТ"],
        [6, "СБ"]
]).get(date.getDay());
}

console.log(getWeekDay(new Date(2012, 0, 3)));
