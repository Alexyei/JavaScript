(function () {
    let selectPanel = document.querySelector(".select-panel");
    let hoverPanel = document.querySelector(".hover-panel");
    let trainBtn = document.querySelector(".grid-five");
    let backBtn = document.querySelector(".back-btn");

    trainBtn.addEventListener("click", (event) => {
        selectPanel.style.pointerEvents = "none";
        hoverPanel.style.width = "100%";
    });

    backBtn.addEventListener("click", (event) => {
        selectPanel.style.pointerEvents = "auto";
        hoverPanel.style.width = "0";
    });


    // document.querySelector(".grid-third").addEventListener("click",(event)=>{
    //     // console.log(typeof this);
    //     // console.log(typeof event.currentTarget);
    //     // в стрелочных функциях this не рабоатет, поэтому event.currentTarget
    //     event.currentTarget.style.backgroundColor = "green";
    // });

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
