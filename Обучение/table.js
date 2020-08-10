console.log("id=\"age-table\"");
// let table;
console.log(document.getElementById("age-table"));
console.log(table = document.querySelector("#age-table"));
console.log("<label>");
console.log(table.getElementsByTagName("label"));
console.log(table.querySelectorAll("label"));
console.log("first <td>");
console.log(table.getElementsByTagName("td")[0])
console.log(table.querySelector("td"));
console.log("<form name=\"search\">");
// console.log(document.getElementsByName("search"));
console.log(form = document.querySelector("form[name=\"search\"]"));
console.log(document.querySelectorAll("form[name=\"search\"]")[0]);
console.log("first <input>");
console.log(form.querySelector("input"));
console.log(form.querySelector("input:first-child"));
console.log("last <input>");
console.log(form.querySelector("input[type=\"submit\"]"));



