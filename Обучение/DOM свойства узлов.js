let licollection = document.querySelectorAll("li");
for (let li of licollection)
    console.log(`${li.childNodes[0].data.trim()}: ${li.querySelectorAll("li").length}`);
