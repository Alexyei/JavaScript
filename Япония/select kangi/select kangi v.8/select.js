(function () {
    let selectPanel = document.querySelector(".select-panel");
    let hoverPanel = document.querySelector(".hover-panel");
    let trainBtn = document.querySelector(".grid-five");
    let backBtn = document.querySelector(".back-btn");
    let mobileBackBtn = document.querySelector(".mobile-back-btn");

    let mobileHomeHeader = document.querySelector(".mobile-home");
    let mobileBackHeader = document.querySelector(".mobile-back");

    trainBtn.addEventListener("click", (event) => {
        selectPanel.style.pointerEvents = "none";
        hoverPanel.style.width = "100%";
        mobileHomeHeader.style.display= "none";
        mobileBackHeader.style.display="flex";
    });

    function onBack(event){
        selectPanel.style.pointerEvents = "auto";
        hoverPanel.style.width = "0";
        mobileHomeHeader.style.display= "flex";
        mobileBackHeader.style.display="none";
    }

    backBtn.addEventListener("click", onBack);
    mobileBackBtn.addEventListener("click", onBack);

    let selectedMode = 0; // 0 - хирагана, 1 - катакана, 2 - кандзи
    let selectedCard = document.querySelector(".grid-first");
    for (let card of document.querySelectorAll(".grid-first, .grid-second, .grid-third")){
        card.addEventListener("click", selectCardHandler);
    }

    function selectCardHandler(event) {
        if (selectedCard !== event.currentTarget){
            selectedCard.classList.remove("selected-item");
            selectedCard = event.currentTarget;
            selectedCard.classList.add("selected-item");
            selectedMode = selectedCard.dataset.selectedMode;
            console.log(selectedMode);
        }
    }

})();
