(function () {
    let selectPanel = document.querySelector(".select-panel");
    let hoverPanel = document.querySelector(".hover-panel");
    let trainBtn = document.querySelector(".grid-five");
    let backBtn = document.querySelector(".back-btn");
    let mobileBackBtn = document.querySelector(".mobile-back-btn");

    let mobileHomeHeader = document.querySelector(".mobile-home");
    let mobileBackHeader = document.querySelector(".mobile-back");

    let settingsBtn = document.querySelector(".settings-item");
    let mobileSettingsPanel = document.querySelector(".mobile-settings-panel");
    let mobileSettingPanelShowFlag = false;

    trainBtn.addEventListener("click", (event) => {
        selectPanel.style.pointerEvents = "none";
        hoverPanel.style.width = "100%";
        mobileHomeHeader.style.display= "none";
        mobileBackHeader.style.display="flex";
        hoverPanel.style.pointerEvents = "auto";

    });

    function onBack(event){
        selectPanel.style.pointerEvents = "auto";
        hoverPanel.style.width = "0";
        mobileHomeHeader.style.display= "flex";
        mobileBackHeader.style.display="none";
        mobileSettingsPanel.style.height="0";
        hoverPanel.style.pointerEvents = "none";
        mobileSettingPanelShowFlag = false;
    }

    backBtn.addEventListener("click", onBack);
    mobileBackBtn.addEventListener("click", onBack);

    // let selectedMode = 0; // 0 - хирагана, 1 - катакана, 2 - кандзи
    let selectedCard = document.querySelector(".grid-first");
    for (let card of document.querySelectorAll(".grid-first, .grid-second, .grid-third")){
        card.addEventListener("click", selectCardHandler);
    }

    function selectCardHandler(event) {
        if (selectedCard !== event.currentTarget){
            selectedCard.classList.remove("selected-item");
            selectedCard = event.currentTarget;
            selectedCard.classList.add("selected-item");
            // selectedMode = selectedCard.dataset.selectedMode;
            // console.log(selectedMode);
        }
    }


    settingsBtn.addEventListener("click",(event)=>{
        if (mobileSettingPanelShowFlag){
            mobileSettingsPanel.style.height="0";
        }else{
            mobileSettingsPanel.style.height="50%";
        }
        mobileSettingPanelShowFlag = !mobileSettingPanelShowFlag;
    });

    // accordion
    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {

            // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

            // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
            // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
            //   currentlyActiveAccordionItemHeader.classList.toggle("active");
            //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            // }

            if (event.target.closest(".section-arrow-item")) return;

            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if(accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            }
            else {
                accordionItemBody.style.maxHeight = "0";
            }

        });
    });
})();
