(function(){
    let hiraganaSet = new Set();
    let katakanaSet = new Set();
    let kanjiSet = new Set();
    let charactersPanel = document.querySelector(".characters-panel");
    let hiraganaPanel = document.querySelector(".hiragana-panel");
    let katakanaPanel = document.querySelector(".katakana-panel");
    let kanjiPanel = document.querySelector(".kanji-panel");

    let currentSet = hiraganaSet;
    let currentPanel = hiraganaPanel;
    let selectedMode = "0"; // 0 - хирагана, 1 - катакана, 2 - кандзи
    for (let card of document.querySelectorAll(".grid-first, .grid-second, .grid-third"))
    {
        card.addEventListener("click", (event)=>{
            let current = event.currentTarget;
            let currentMode = current.dataset.selectedMode;
            if (selectedMode !== currentMode){
                // currentPanel.style.display = "none";
                currentPanel.classList.add("hide-panel");
                selectedMode = currentMode;
                console.log(selectedMode);
                switch (selectedMode){
                    case "0":
                        currentPanel = hiraganaPanel;
                        currentSet = hiraganaSet;
                        break;
                    case "1":
                        currentPanel = katakanaPanel;
                        currentSet = katakanaSet;
                        break;
                    case "2":
                        currentPanel = kanjiPanel;
                        currentSet = kanjiSet;
                        break;
                }
                // currentPanel.style.display = "flex";
                currentPanel.classList.remove("hide-panel");
            }
        });
    }

    charactersPanel.addEventListener("click",(event)=>{
       let current = event.currentTarget;

        if (current.classList.contains("char-item")){
           SelectItem(current);
       }
       else if (current.classList.contains("arrow-item")){
           arrowSelectHandler(current.parentNode);
       }
       else if (current.classList.contains("section-select-arrow")){
            arrowSelectHandler(current.parentNode.querySelector(".section-char-panel"));
       }
    });
    function SelectItem(element) {
        let itemValue = element.dataset.charCode;
        if (currentSet.has(itemValue))
            currentSet.delete(itemValue);
        else
            currentSet.add(itemValue);
        element.classList.toggle("selected-char-item");
    }
    function SelectElements(elements) {
        for(let el of elements)
            SelectItem(el);
    }
    function arrowSelectHandler(parentNode){
        let elements = parentNode.querySelectorAll("[data-char-code]");
        let notSelectedElements = parentNode.querySelectorAll("[data-char-code]:not(.selected-item)");

        if (notSelectedElements.length === 0 || elements.length === notSelectedElements.length)
            SelectElements(elements);
        else
            for(let el of notSelectedElements)
                SelectItem(el);
    }

    let selectAllBtn = document.querySelectorAll(".select-all-btn");
    for(let btn of selectAllBtn)
        btn.addEventListener("click",(event)=>{
            SelectElements(currentPanel);
        });
})();
