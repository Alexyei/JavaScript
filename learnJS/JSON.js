// let room = {
//     number: 23,
//     toJSON() {
//         return this.number;
//     }
// };
//
// let meetup = {
//     title: "Conference",
//     room
// };
// console.log(JSON.stringify(meetup[room]));
// console.log(JSON.stringify(meetup["room"]));
// console.log(JSON.stringify(meetup.room));
// console.log( JSON.stringify(room) ); // 23
//
// console.log( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/

let user = {
    name: "Василий Иванович",
    age: 35
};

let userJSON = JSON.stringify(user);
console.log(userJSON);
let user1 = JSON.parse(userJSON);
console.log(Object.entries(user1));


let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    // if ((key !== "") && (value === meetup))
    // console.log(`${key.length}: ${value}`);
    return (key && value === meetup) ? undefined : value;
}));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
