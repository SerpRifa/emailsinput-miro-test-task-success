export const createTemplate = (emails) =>
  `<section class="email-input__main">    
    <div class="email-input__editer">
      <span class="email-input__head-text"> Share <strong>Board name</strong> with other </span>
      <div class="email-input__emails">
        <span id="email-input__emails-list">${emails
          .map((email) => templateEmail(email))
          .join("")}
        </span>      
        <span style="display:inline-block;">
          <input                
              id="email-input__input"
              placeholder = "add more people..."            
          />
        </span>  
      </div>
    </div>
    <div class="email-input__panel-buttons">
      <button id="email-input__button-add-random" class="email-input__button">Add email</button>
      <button id="email-input__button-get-count" class="email-input__button">Get email count</button>    
    </div>
  </section>`;

export const templateEmail = (email) =>
  `<span class="${
    isValid(email) ? "email-input__email" : "email-input__invalid"
  }" name="email-input__email-${email}"> 
    ${email} 
    <i class="email-input__email-delete"></i> 
  </span>`;

const isValid = (email) => /\S+@\S+\.\S+/.test(email);