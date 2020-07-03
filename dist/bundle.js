!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("EmailsInput",[],t):"object"==typeof exports?exports.EmailsInput=t():e.EmailsInput=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(i,l,function(t){return e[t]}.bind(null,l));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));class i{constructor(){if(new.target===i)throw new Error("Can't instantiate Component, only concrete one.");this._element=null}getTemplate(){throw new Error("Abstract method not implemented: getTemplate")}getElement(){return this._element||(this._element=this.createElement(this.getTemplate())),this._element}createElement(e){const t=document.createElement("div");return t.innerHTML=e,t.firstChild}removeElement(){this._element=null}}class l{constructor(e,t,n){this._emails=new Set(e),this._onRemove=n,this._onAdd=t}getEmails(){return this._emails}get size(){return this._emails.size}remove(e){this._emails.delete(e),this._onRemove(e)}add(e){return!!(e=e.trim())&&(!this._emails.has(e)&&(this._onAdd(e),this._emails.add(e),!0))}}const a=e=>`<span class="${s(e)?"email-input__email":"email-input__invalid"}" name="email-input__email-${e}"> \n    ${e} \n    <i class="email-input__email-delete"></i> \n  </span>`,s=e=>/\S+@\S+\.\S+/.test(e);n(0);class r extends i{constructor(e,t){super(),this._container=e,this._handleKeyPress=this._handleKeyPress.bind(this),this._handleAddEmail=this._handleAddEmail.bind(this),this._handleDeleteEmail=this._handleDeleteEmail.bind(this),this._handleClickDelete=this._handleClickDelete.bind(this),this._handleBlurInput=this._handleBlurInput.bind(this),this._handleClickAddRandom=this._handleClickAddRandom.bind(this),this._handleClickGetCount=this._handleClickGetCount.bind(this),this._handlePaste=this._handlePaste.bind(this),this._emails=new l(t,this._handleAddEmail,this._handleDeleteEmail)}_addEmailEvent(e){this._emails.add(e.target.value)&&(e.target.value="")}_afterRender(){this._setInputKeydownHandler(),this._setInputBlurHandler(),this._setClickDeleteEmailHandler(),this._setClickAddRandomHandler(),this._setClickGetCount(),this._setInputPasteHandler()}_handleKeyPress(e){13!==e.keyCode&&","!=e.key||(e.preventDefault(),this._addEmailEvent(e))}_handleAddEmail(e){this.getElement().querySelector("#email-input__emails-list").insertAdjacentHTML("beforeEnd",templateEmail(e))}_handleDeleteEmail(e){this.getElement().querySelector(`span[name="email-input__email-${e}"]`).remove()}_handleBlurInput(e){this._emails.add(e.target.value)&&(e.target.value="")}_handleClickDelete({target:e}){if("email-input__email-delete"!==e.className)return;const t=e.parentNode.outerText.trim();this._emails.remove(t)}_handleClickAddRandom(){this._emails.add(this.getRandomEmail())}_handleClickGetCount(){alert(this._emails.size)}_handlePaste(e){var t=(e.clipboardData||e.originalEvent.clipboardData||window.clipboardData).getData("text");this._parseEmails(t),e.preventDefault()}_parseEmails(e){e.replace(/\s/g,",").split(",").forEach(e=>this._emails.add(e))}_setInputKeydownHandler(){this.getElement().querySelector("#email-input__input").addEventListener("keydown",this._handleKeyPress)}_setInputBlurHandler(){this.getElement().querySelector("#email-input__input").addEventListener("blur",this._handleBlurInput)}_setInputPasteHandler(){this.getElement().querySelector("#email-input__input").addEventListener("paste",this._handlePaste)}_setClickDeleteEmailHandler(){this.getElement().querySelector("#email-input__emails-list").addEventListener("click",this._handleClickDelete)}_setClickAddRandomHandler(){this.getElement().querySelector("#email-input__button-add-random").addEventListener("click",this._handleClickAddRandom)}_setClickGetCount(){this.getElement().querySelector("#email-input__button-get-count").addEventListener("click",this._handleClickGetCount)}_setClickGetCount(){this.getElement().querySelector("#email-input__button-get-count").addEventListener("click",this._handleClickGetCount)}getRandomEmail(){let e="";const t="abcdefghijklmnopqrstuvwxyz0123456789",n=4+Math.floor(5*Math.random());for(let i=0;i<n;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e+"@gmail.com"}getTemplate(){return`<section class="email-input__main">    \n    <div class="email-input__editer">\n      <span class="email-input__head-text"> Share <strong>Board name</strong> with other </span>\n      <div class="email-input__emails">\n        <span id="email-input__emails-list">${[...this._emails.getEmails()].map(e=>a(e)).join("")}\n        </span>      \n        <span style="display:inline-block;">\n          <input                \n              id="email-input__input"\n              placeholder = "add more people..."            \n          />\n        </span>  \n      </div>\n    </div>\n    <div class="email-input__panel-buttons">\n      <button id="email-input__button-add-random" class="email-input__button">Add email</button>\n      <button id="email-input__button-get-count" class="email-input__button">Get email count</button>    \n    </div>\n  </section>`}render(){this._container.append(this.getElement()),this._afterRender()}}}])}));
//# sourceMappingURL=bundle.js.map