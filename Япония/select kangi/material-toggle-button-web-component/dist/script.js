const KEYCODE = {
  SPACE: 32,
  ENTER: 13,
}

class ToggleButton extends HTMLElement {
  static get observedAttributes () {
    return ['pressed', 'disabled']
  }

  constructor () {
    super()

    const template = document.getElementById('toggle-button-template')

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this._onWindowKeyUp = this._onWindowKeyUp.bind(this)
  }

  connectedCallback () {
    if (!this.hasAttribute('role'))
      this.setAttribute('role', 'button')
    if (!this.hasAttribute('tabindex'))
      this.setAttribute('tabindex', 0)
      
    // To singal to assistive technology that this is a toggle button, and
    // not just a regular button, add an inital aria-pressed state.
    if (!this.hasAttribute('aria-pressed'))
      this.setAttribute('aria-pressed', 'false')

    // A user may set a property on an _instance_ of an element,
    // before its prototype has been connected to this class.
    // The `_upgradeProperty()` method will check for any instance properties
    // and run them through the proper class setters.
    this._upgradeProperty('pressed')
    this._upgradeProperty('disabled')

    this.addEventListener('click', this._toggle)
    this.addEventListener('keydown', this._onKeyDown)
    
    // A terrible hack to achieve focus only with `tab` button
    window.addEventListener('keyup', this._onWindowKeyUp)
  }

  disconnectedCallback () {
    this.removeEventListener('keydown', this._onKeyDown)
    this.removeEventListener('click', this._toggle)
    this.removeEventListener('blur', this._onBlur)
    
    window.removeEventListener('keyup', this._onWindowKeyUp)
  }
  
  set pressed (value) {
    const isPressed = Boolean(value)
    
    if (isPressed)
      this.setAttribute('pressed', '')
    else
      this.removeAttribute('pressed')
  }

  get pressed () {
    return this.hasAttribute('pressed')
  }

  set disabled (value) {
    const isDisabled = Boolean(value)
    
    if (isDisabled)
      this.setAttribute('disabled', '')
    else
      this.removeAttribute('disabled')
  }

  get disabled () { 
    return this.hasAttribute('disabled')
  }

  attributeChangedCallback (name, oldvalue, newValue) {
    const hasValue = newValue !== null
    
    switch (name) {
      case 'pressed':
        this.setAttribute('aria-pressed', hasValue)
        break
      case 'disabled':
        this.setAttribute('aria-disabled', hasValue)
          // The `tabindex` attribute does not provide a way to fully remove
          // focusability from an element.
          // Elements with `tabindex=-1` can still be focused with
          // a mouse or by calling `focus()`.
          // To make sure an element is disabled and not focusable, remove the
          // `tabindex` attribute.
        if (hasValue) {
          this.removeAttribute('tabindex')
            // If the focus is currently on this element, unfocus it by
            // calling the `HTMLElement.blur()` method.
          this.blur()
        } else {
          this.setAttribute('tabindex', '0')
        }
        break
    }
  }

  _upgradeProperty (prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }
  
  _onWindowKeyUp (e) {
    if (e.keyCode !== 9 || document.activeElement !== this) return
      
    this.shadowRoot.querySelector('#focus').classList.add('on')  
    this.addEventListener('blur', this._onBlur)
  }
  
  _onBlur () {
    this.shadowRoot.querySelector('#focus').classList.remove('on')
    this.removeEventListener('blur', this._onBlur)
  }

  _onKeyDown (e) {
    // Don’t handle modifier shortcuts typically used by assistive technology.
    if (e.altKey) return

    switch (e.keyCode) {
      case KEYCODE.SPACE:
      case KEYCODE.ENTER:
        e.preventDefault()
        this._toggle(e)
        break
        // Any other key press is ignored and passed back to the browser.
      default:
        return
    }
  }

  _toggle (e) {
    if (this.disabled) return
    
    const calcCoeff = (progress, dur) => progress / dur
    const calcCoeffReverse = (progress, dur) => 1 - progress / dur
    
    const mask = this.shadowRoot.querySelector('#mask')
    const duration = 250
    const finalD = 140 // clip path diameter [%]
    
    let { offsetX: x, offsetY: y } = e
    let lastTime = null
    let calcCoeffFn = calcCoeff
    
    const forwards = this.pressed = !this.pressed
    
    // backwards
    if (!forwards) calcCoeffFn = calcCoeffReverse
      
    // the button was pressed with keyboard
    if (x === undefined) 
      x = y = '50%' 
    else 
      [x, y] = [x, y].map(coord => coord + 'px')
    
    const animate = time => {
    	if (!lastTime) lastTime = time
      
      const progress = time - lastTime
      const coeff = calcCoeffFn(progress, duration)
      const curD = coeff * finalD
      
      mask.style.clipPath = `circle(${curD}% at ${x} ${y})`
      
      if (progress < duration) 
        requestAnimationFrame(animate)
      else 
        mask.style.clipPath = `circle(${forwards ? finalD : 0}% at ${x} ${y})`
    }
    
    requestAnimationFrame(animate)
  }
}

customElements.define('toggle-button', ToggleButton)