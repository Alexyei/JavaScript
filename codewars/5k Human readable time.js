// function humanReadable(seconds) {
//     result = [];
//     seconds_periods = [60*60, 60 ,1];
//     for (let i = 0; i < seconds_periods.length; ++i) {
//         result.push((Math.floor(seconds/seconds_periods[i])+"").padStart(2,"0"));
//         seconds%=seconds_periods[i];
//     }
//     return result.join(':');
// }

function humanReadable(seconds) {
    return [60 * 60, 60, 1].map((item) =>
    {
        timel = Math.floor(seconds / item);
        seconds %= item;
        return ("0"+timel).slice(-2);
    }).join(":");
}

console.log(humanReadable(0));
console.log(humanReadable(86399));