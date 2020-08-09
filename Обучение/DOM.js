console.log("<div>");
console.log(document.body.children[0]);
console.log(document.body.firstElementChild);
console.log(document.body.childNodes[1]);
console.log("<ul>");
console.log(document.body.children[1]);
console.log("<li>");
console.log(document.body.children[1].lastElementChild);
console.log(document.body.children[1].children[1]);

let table = document.body.children[document.body.children.length-2];
console.log(table);

for(let i=0;i<table.rows.length;++i)
    table.rows[i].cells[i].style.backgroundColor = "red";


