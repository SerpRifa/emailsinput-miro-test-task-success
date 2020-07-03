export default class EmailsModel {
  constructor(emails, onAdd, onRemove) {
    this._emails = new Set(emails);
    this._onRemove = onRemove;
    this._onAdd = onAdd;
  }

  getEmails() {
    return this._emails;
  }

  get size() {
    return this._emails.size;
  }

  remove(email) {
    this._emails.delete(email);
    this._onRemove(email);
  }

  add(email) {
    email = email.trim();
    if(!email) return false;

    if(this._emails.has(email)) return false;

    this._onAdd(email);
    this._emails.add(email);    
    
    return true;
  }
    
}
