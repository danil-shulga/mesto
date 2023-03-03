let userName = document.querySelector('.user__name');
let userDescription = document.querySelector('.user__description');

let userEditBtn = document.querySelector('.user__btn-edit');

let popup = document.querySelector('.popup');
let closePopupBtn = popup.querySelector('.popup__btn-close');
// let savePopupBtn = popup.querySelector('.popup__btn-save');
let formUserEdit = popup.querySelector('.form__user-edit')

let inputUserName = popup.querySelector('.popup__input_text_user-name')
let inputUserDescription = popup.querySelector('.popup__input_text_user-description')



function setInputValue(inputValue, textContent) {
  inputValue.value = textContent.textContent;
}

function setTextContentFromInputValue(textContent, inputValue) {
  textContent.textContent = inputValue.value;
}

function switchPopup() {
  popup.classList.toggle('popup_opened');
}

function openPopupAndSetText() {
  popup.classList.toggle('popup_opened');
  setInputValue(inputUserName, userName);
  setInputValue(inputUserDescription, userDescription);
}

function changeText(event) {
  setTextContentFromInputValue(userName, inputUserName);
  setTextContentFromInputValue(userDescription, inputUserDescription);
  event.preventDefault();
  switchPopup();
}

function closePopupByClickOverlay(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  switchPopup();
}

userEditBtn.addEventListener('click', openPopupAndSetText);
closePopupBtn.addEventListener('click', switchPopup);
popup.addEventListener('click', closePopupByClickOverlay);

formUserEdit.addEventListener('submit', changeText);

// savePopupBtn.onclick = function (evt) {
//   evt.preventDefault();
// }

// console.log(inputUserName.value)
