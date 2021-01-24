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


function getDateAgo(date, days){
    let ndate = new Date();
    ndate.setTime(date.getTime());
    ndate.setDate(ndate.getDate()-days);
    return ndate.getDate();
}

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

function getSecondsToday(){
    let now = new Date();
    return Math.round((now-new Date(now.getFullYear(), now.getMonth(), now.getDate()))/1000);
}

console.log(getSecondsToday())

function getSecondsToTomorrow(){
    let now = new Date();
    return Math.round((new Date(now.getFullYear(),now.getMonth(), now.getDate()+1)-now)/1000);
}

console.log(getSecondsToTomorrow());

console.log(getSecondsToday()+getSecondsToTomorrow());

function formatDate(date){
    let now = new Date();
    if (now - date < 1000)
        return "прямо сейчас";
    else if (now - date < 60*1000)
        return `${Math.round((now - date)/1000)} сек. назад`;
    else if (now - date < 60*60*1000)
        return `${Math.round((now - date)/(60*1000))} мин. назад`;
    else
        return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${(date.getFullYear()%100).toString().padStart(2, "0")} ${date.getHours()}:${date.getMinutes()}`;
}


console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
