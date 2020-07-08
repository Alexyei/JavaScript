console.log("1 hour, 1 minute, 2 seconds".replace(/, ([^,]*)$/," and $1"))
console.log(1);
n =7;
console.log(n+" word"+((n>1)?"s":""));
function formatDuration (seconds) {
    if (!(seconds))
        return "now";

    let words = ["year","day", "hour", "minute", "second"];
    let seconds_periods = [365*24*60*60, 24*60*60, 60*60, 60, 1];
    let result = [];

    for(let i = 0;seconds && i<words.length;++i){
        let n=Math.floor(seconds/seconds_periods[i]);
        if (n){
            result.push(getIntWithNoun(n,words[i]));
            seconds%=seconds_periods[i];
        }
    }

    return result.join(", ").replace(/, ([^,]*)$/," and $1");

}

function getIntWithNoun(value, word) {
    return `${value} ${word}${value>1?"s":""}`;
}

console.log(formatDuration(1));
console.log(formatDuration(61));
console.log(formatDuration(120));
console.log(formatDuration(121));
console.log(formatDuration(3600));
console.log(formatDuration(7200));
