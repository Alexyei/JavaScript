let moduleHashInUrl = (function(){
    // function getParamString(){
    //     return selectedMode+":"+Array.from(currentSet).map((x)=>parseInt(x).toString(36)).join('_');
    // }
    // let linkBtns = document.querySelectorAll(".link-item");
    // for(let btn of linkBtns)
    //     btn.addEventListener("click",(event)=>{
    //         console.log(getParamString());
    //     });
    let tooltipFlag = "none";
    let tooltipTimerID;

    let linkBtns = document.querySelectorAll(".link-item").forEach(btn=>btn.addEventListener("click",(event)=>{

        let link = getHashLink();
        //navigator.clipboard.writeText(link).then(function (){throw new Error("Ошибка в промисе")}).then(function() {
            navigator.clipboard.writeText(link).then(function() {
            console.log('Async: Copying to clipboard was successful!');
                // throw new Error("Ошибка в промисе");
            if (tooltipFlag==="ok")
            {
                clearTimeout(tooltipTimerID);
                tooltipTimerID = setTimeout(()=>{document.querySelectorAll(".tooltip-link-ok").forEach(tooltip=>{
                    tooltip.classList.add("tooltip-hide");tooltipFlag="none";})},1000);
            }
            else if (tooltipFlag==="error"){
                clearTimeout(tooltipTimerID);
                document.querySelectorAll(".tooltip-link-error").forEach(tooltip=>
                    tooltip.classList.add("tooltip-hide"));

                document.querySelectorAll(".tooltip-link-ok").forEach(tooltip=>
                    tooltip.classList.remove("tooltip-hide"));
                tooltipTimerID = setTimeout(()=>{document.querySelectorAll(".tooltip-link-ok").forEach(tooltip=>{
                    tooltip.classList.add("tooltip-hide");tooltipFlag="none";})},1000);
                tooltipFlag = "ok";
            }
            else{
                document.querySelectorAll(".tooltip-link-ok").forEach(tooltip=>
                    tooltip.classList.remove("tooltip-hide"));
                tooltipTimerID = setTimeout(()=>{document.querySelectorAll(".tooltip-link-ok").forEach(tooltip=>{
                    tooltip.classList.add("tooltip-hide");tooltipFlag="none";})},1000);
                tooltipFlag = "ok";
            }
        }).catch(err =>
            {
            console.error('Async: Could not copy text: ', err);
            if (tooltipFlag==="error")
            {
                clearTimeout(tooltipTimerID);
                tooltipTimerID = setTimeout(()=>{document.querySelectorAll(".tooltip-link-error").forEach(tooltip=>{
                    tooltip.classList.add("tooltip-hide");tooltipFlag="none";})},1000);
            }
            else if (tooltipFlag==="ok"){
                clearTimeout(tooltipTimerID);
                document.querySelectorAll(".tooltip-link-ok").forEach(tooltip=>
                    tooltip.classList.add("tooltip-hide"));

                document.querySelectorAll(".tooltip-link-error").forEach(tooltip=>
                    tooltip.classList.remove("tooltip-hide"));
                tooltipTimerID = setTimeout(()=>{document.querySelectorAll(".tooltip-link-error").forEach(tooltip=>{
                    tooltip.classList.add("tooltip-hide");tooltipFlag="none";})},1000);
                tooltipFlag = "error";
            }
            else{
                document.querySelectorAll(".tooltip-link-error").forEach(tooltip=>
                    tooltip.classList.remove("tooltip-hide"));
                tooltipTimerID = setTimeout(()=>{document.querySelectorAll(".tooltip-link-error").forEach(tooltip=>{
                    tooltip.classList.add("tooltip-hide");tooltipFlag="none";})},1000);
                tooltipFlag = "error";
            }
        });

        // console.log(getHashLink());
    }));
    function getHashLink(){
        let selectedMode = moduleCharactersPanel.getSelectedMode();
        let currentSet = moduleCharactersPanel.getCurrentSet();

        return window.location.href.split("#")[0]+"#"+selectedMode+":"+Array.from(currentSet).join("_");
    }

    function hashValid(){
        console.log("HASH:");
        console.log(window.location.hash);
        console.log(window.location.href.split("#")[0]);
        let regexp = /^#([\d]):(\d+_?)*$/;
        if (regexp.test(window.location.hash)){
            console.log("hash true");
            return true;
        }
        return false;
    }

    function hashEncode(){
        let parameters = window.location.hash.match(/\d+/g);
        //return {selectedMode: 2, charCodes: ["10","14","161"]};
        return {selectedMode: parameters[0], charCodes: parameters.slice(1)};
    }

    function selectItems(charCodes){
        console.log("протестировать 355 354 множественный переход по ссылкам");
        if (!charCodes.length)
            return;
        //console.log("можно без join");
        //const elements = moduleCharactersPanel.getCurrentPanel().querySelectorAll(charCodes.map(n => `[data-char-code="${n}"]`).join(', '));
        const elements = moduleCharactersPanel.getCurrentPanel().querySelectorAll(charCodes.map(n => `[data-char-code="${n}"]`));
        for (let el of elements){
            let itemValue = el.dataset.charCode;
            el.classList.toggle("selected-char-item");
        }

        moduleCharactersPanel.setCountLabels();
    }

    window.addEventListener("load",(event)=>{
        if (hashValid()){
            moduleRippleAnimation.toggleRippleAnimationFlag();
            let hash = hashEncode();
            switch (hash.selectedMode){
                case "0":

                    moduleCharactersPanel.setHiraganaSet(new Set(hash.charCodes));
                    document.querySelector(".grid-first").click();

                    break;
                case "1":

                    moduleCharactersPanel.setKatakanaSet(new Set(hash.charCodes));
                    document.querySelector(".grid-second").click();
                    break;
                case "2":

                    moduleCharactersPanel.setKanjiSet(new Set(hash.charCodes));
                    document.querySelector(".grid-third").click();
                    break;
            }

            selectItems(hash.charCodes);
            document.querySelector(".grid-five").click();
            moduleRippleAnimation.toggleRippleAnimationFlag();
        }
    })
})();
