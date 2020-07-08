function berlinClock(time) {
    let [hours, minutes, seconds] = time.split(":");
    console.log(seconds%2?"Y":"O");
    console.log("".padEnd(hours/5,"R").padEnd(4,"O"));
    console.log("".padEnd(hours%5,"R").padEnd(4,"O"));
    console.log("".padEnd(minutes*3/15,"YYR").padEnd(minutes-(minutes/15)*15,"Y").padEnd(11,"O"));
    console.log("".padEnd(minutes%5,"Y").padEnd(4,"O"));
}

berlinClock("19:56:01")