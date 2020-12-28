(function(){
    let t0 = performance.now();

    let hiraganaPanel = document.querySelector(".hiragana-panel");
    let katakanaPanel = document.querySelector(".katakana-panel");
    let kanjiPanel = document.querySelector(".kanji-panel");

    setCharCodes(hiraganaPanel);
    setCharCodes(katakanaPanel);
    setCharCodes(kanjiPanel);

    function setCharCodes(panel){
        let rows = panel.querySelectorAll(".char-row");
        for(let i =0;i<rows.length;++i){
            let items = rows[i].querySelectorAll(".char-item:not(.empty-item)");
            for(let j =0;j<items.length;++j)
                items[j].dataset.charCode = `${i+1}${j}`;  //((i+1)*10+j).toString(32);
        }
    }

    console.log("Проверить быстродействие установки charcodes")
    console.log("Время выполнения: "+(performance.now() - t0).toFixed(4)+" милисекунд");
})();
