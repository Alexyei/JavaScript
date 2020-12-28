let moduleCharactersPanel = (function(){
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
    setCountLabels(true);

    // document.querySelector(".grid-fourth").addEventListener("click", (event)=>{
    //     document.querySelector(".grid-third").click();
    // });

    for (let card of document.querySelectorAll(".grid-first, .grid-second, .grid-third"))
    {
        card.addEventListener("click", (event)=>{
            // console.log("TEST PATTERN "+moduleSelect.getSelectedCard().innerText);
            // moduleSelect.setSelectedCard(document.querySelector(".grid-third"));
            // console.log("TEST PATTERN "+moduleSelect.getSelectedCard().innerText);
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
        card.addEventListener("click",(event)=>{
            setCountLabels(true);
        });
    }

    
    function setCountLabels(labelAll=false){
        for (let countLabel of document.querySelectorAll(".select-char-count-label"))
            countLabel.innerText=currentSet.size.toString();
        if (labelAll){
            for (let allLabel of document.querySelectorAll(".select-char-all-label"))
                allLabel.innerText=currentPanel.querySelectorAll("[data-char-code]").length.toString();
        }
    }

    charactersPanel.addEventListener("click",(event)=>{
        // console.log("1");
       let current = event.target.closest(".char-item,.arrow-item,.section-arrow-item");
       if (!current) return;
// console.log(current);
        if (current.classList.contains("char-item") && current.dataset.charCode!==undefined){
            // console.log("char-item");
           SelectItem(current);
       }
       else if (current.classList.contains("arrow-item")){
            // console.log("arrow-item");
           SelectHandler(current.parentNode);
       }
       else if (current.classList.contains("section-arrow-item")){
            SelectHandler(current.closest(".accordion-item"));
       }
    });
    function SelectItem(element) {
        let itemValue = element.dataset.charCode;
        if (currentSet.has(itemValue))
            currentSet.delete(itemValue);
        else
            currentSet.add(itemValue);
        // console.log(currentSet);
        element.classList.toggle("selected-char-item");
        setCountLabels();
    }
    function SelectElements(elements) {
        for(let el of elements)
            SelectItem(el);
    }
    function SelectHandler(parentNode){
        let elements = parentNode.querySelectorAll("[data-char-code]");
        let notSelectedElements = parentNode.querySelectorAll("[data-char-code]:not(.selected-char-item)");

        // console.log("el len = "+elements.length," not sel len = "+notSelectedElements.length);
        if (notSelectedElements.length === 0 || elements.length === notSelectedElements.length)
            SelectElements(elements);
        else
            for(let el of notSelectedElements)
                SelectItem(el);
    }

    let selectAllBtn = document.querySelectorAll(".select-all-btn");
    for(let btn of selectAllBtn)
        btn.addEventListener("click",(event)=>{
            SelectHandler(currentPanel);
        });


    window.addEventListener("load",(event)=>{
        let hash = window.location.hash.slice(1);
        let currentMode=hash[0];
        let setStr = hash.slice(2);

    });

    return{
        getCurrentSet: function () {
            return currentSet;
        },
        setCurrentSet: function (value){
            currentSet = value;
        },
        getHiraganaSet: function () {
            return hiraganaSet;
        },
        setHiraganaSet: function (value){
            hiraganaSet = value;
        },
        getKatakanaSet: function () {
            return katakanaSet;
        },
        setKatakanaSet: function (value){
            katakanaSet = value;
        },
        getKanjiSet: function () {
            return kanjiSet;
        },
        setKanjiSet: function (value){
            kanjiSet = value;
        },
        getCurrentPanel: function () {
            return currentPanel;
        },
        setCurrentPanel: function (value){
            currentPanel = value;
        },
        getSelectedMode: function () {
            return selectedMode;
        },
        setSelectedMode: function (value){
            selectedMode = value;
        },
        setCountLabels: function (){
            setCountLabels();
        }
    }
})();
