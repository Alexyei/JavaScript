function dirReduc(arr){
    for(let i=0;i<arr.length-1;++i)
        if (arr[i]==="NORTH" && arr[i+1]==="SOUTH"
            || arr[i]==="SOUTH" && arr[i+1]==="NORTH"
            || arr[i]==="WEST" && arr[i+1]==="EAST"
            || arr[i]==="EAST" && arr[i+1]==="WEST") {
            arr.splice(i, 2);
            i-=i?2:1;
        }
    return arr;
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));