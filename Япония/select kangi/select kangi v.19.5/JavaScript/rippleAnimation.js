let moduleRippleAnimation = (function () {
    let rippleAnimationOn = true;

    for (let card of document.querySelectorAll(".grid-select-item")) {
        card.addEventListener("click", selectCardHandler);
    }

    function selectCardHandler(event) {
        if (!rippleAnimationOn)
            return false;
        let current = event.currentTarget;
        console.log(current);
        let rect = current.getBoundingClientRect();
        let circle = document.createElement('div');
        current.appendChild(circle);

        let d = Math.max(this.clientWidth, this.clientHeight);


        circle.style.width = circle.style.height = d + 'px';


        // let rect = {left: this.offsetLeft, top: this.offsetTop}
        // let rect = this.getClientRect();
        circle.style.left = event.clientX - rect.left - d / 2 + 'px';
        circle.style.top = event.clientY - rect.top - d / 2 + 'px';
        // console.log(d);
        // console.log(e.pageY);
        console.log(rect);
        // console.log(rect.top);
        // console.log(event.clientY - rect.top - d/2 + 'px');
        // console.log(this);

        circle.classList.add('ripple');
        setTimeout(() => circle.remove(), 1000);
    }

    return {
        getRippleAnimationFlag: function () {
            return rippleAnimationOn;
        },
        setRippleAnimationFlag: function (value) {
            rippleAnimationOn = value;
        },
        toggleRippleAnimationFlag: function (){
            rippleAnimationOn = !rippleAnimationOn;
        }
    }
})();
