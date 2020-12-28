(function () {
    let selectPanel = document.querySelector(".select-panel");
    let hoverPanel = document.querySelector(".hover-panel");
    let Btn = document.querySelector(".btn");

    Btn.addEventListener("click", (event) => {
        selectPanel.style.pointerEvents = "none";
        hoverPanel.style.width = "100%";
    });
})();
