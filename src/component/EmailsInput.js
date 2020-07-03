import Component from "./Component.js";
import EmailsModel from "./EmailsInputModel.js";
import { createTemplate } from "./EmailsInputView.js";
import "./EmailsInput.css";

export default class EmailsInput extends Component {
  constructor(container, emails) {
    super();
    this._container = container;
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this._handleAddEmail = this._handleAddEmail.bind(this);
    this._handleDeleteEmail = this._handleDeleteEmail.bind(this);
    this._handleClickDelete = this._handleClickDelete.bind(this);
    this._handleBlurInput = this._handleBlurInput.bind(this);
    this._handleClickAddRandom = this._handleClickAddRandom.bind(this);
    this._handleClickGetCount = this._handleClickGetCount.bind(this);
    this._handlePaste = this._handlePaste.bind(this);

    this._emails = new EmailsModel(
      emails,
      this._handleAddEmail,
      this._handleDeleteEmail
    );
  }

  _addEmailEvent(event) {
    const isSuccess = this._emails.add(event.target.value);
    isSuccess && (event.target.value = ``);
  }

  _afterRender() {
    this._setInputKeydownHandler();
    this._setInputBlurHandler();
    this._setClickDeleteEmailHandler();
    this._setClickAddRandomHandler();
    this._setClickGetCount();
    this._setInputPasteHandler();
  }

  _handleKeyPress(event) {
    if (!(event.keyCode === 13 || event.key == `,`)) return;
    event.preventDefault();
    this._addEmailEvent(event);
  }

  _handleAddEmail(email) {
    this.getElement()
      .querySelector(`#email-input__emails-list`)
      .insertAdjacentHTML(`beforeEnd`, templateEmail(email));
  }

  _handleDeleteEmail(email) {
    this.getElement()
      .querySelector(`span[name="email-input__email-${email}"]`)
      .remove();
  }

  _handleBlurInput(event) {
    const isSuccess = this._emails.add(event.target.value);
    isSuccess && (event.target.value = ``);
  }

  _handleClickDelete({ target }) {
    if (target.className !== `email-input__email-delete`) return;

    const spanWithEmail = target.parentNode;
    const email = spanWithEmail.outerText.trim();

    this._emails.remove(email);
  }

  _handleClickAddRandom() {
    this._emails.add(this.getRandomEmail());
  }

  _handleClickGetCount() {
    alert(this._emails.size);
  }

  _handlePaste(event) {
    var clipboardData =
      event.clipboardData ||
      event.originalEvent.clipboardData ||
      window.clipboardData;
    var pastedData = clipboardData.getData("text");
    this._parseEmails(pastedData);
    event.preventDefault();
  }

  _parseEmails(value) {
    const temp = value.replace(/\s/g, `,`);
    let emails = temp.split(`,`);
    emails.forEach((email) => this._emails.add(email));
  }

  _setInputKeydownHandler() {
    this.getElement()
      .querySelector(`#email-input__input`)
      .addEventListener(`keydown`, this._handleKeyPress);
  }

  _setInputBlurHandler() {
    this.getElement()
      .querySelector(`#email-input__input`)
      .addEventListener(`blur`, this._handleBlurInput);
  }

  _setInputPasteHandler() {
    this.getElement()
      .querySelector(`#email-input__input`)
      .addEventListener(`paste`, this._handlePaste);
  }

  _setClickDeleteEmailHandler() {
    this.getElement()
      .querySelector(`#email-input__emails-list`)
      .addEventListener(`click`, this._handleClickDelete);
  }

  _setClickAddRandomHandler() {
    this.getElement()
      .querySelector(`#email-input__button-add-random`)
      .addEventListener(`click`, this._handleClickAddRandom);
  }

  _setClickGetCount() {
    this.getElement()
      .querySelector(`#email-input__button-get-count`)
      .addEventListener(`click`, this._handleClickGetCount);
  }

  _setClickGetCount() {
    this.getElement()
      .querySelector(`#email-input__button-get-count`)
      .addEventListener(`click`, this._handleClickGetCount);
  }

  getRandomEmail() {
    let userName = ``;
    const chars = `abcdefghijklmnopqrstuvwxyz0123456789`;

    const lengthUserName = 4 + Math.floor(Math.random() * 5);

    for (let i = 0; i < lengthUserName; i++) {
      var position = Math.floor(Math.random() * chars.length);
      userName += chars.charAt(position);
    }

    return `${userName}@gmail.com`;
  }

  getTemplate() {
    return createTemplate([...this._emails.getEmails()]);
  }

  render() {
    this._container.append(this.getElement());
    this._afterRender();
  }
}
