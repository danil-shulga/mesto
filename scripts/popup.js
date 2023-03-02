let userName = document.querySelector('.user__name');
let userDescription = document.querySelector('.user__description');

let userEditBtn = document.querySelector('.user__btn-edit');
let addCardBtn = document.querySelector('.profile__btn-add-card');

let popup = document.querySelector('.popup');
let closePopupBtn = popup.querySelector('.popup__btn-close');
let savePopupBtn = popup.querySelector('.popup__btn-save');

let inputUserName = popup.querySelector('.popup__user-name')
let inputUserDescription = popup.querySelector('.popup__user-description')

userEditBtn.addEventListener('click', openPopupAndSetText);
closePopupBtn.addEventListener('click', switchPopup);

savePopupBtn.addEventListener('click', changeText);
savePopupBtn.onclick = function (evt) {
  evt.preventDefault();
}

// не до конца разобрался как работает .preventDefault() по этому воспользовался решением которое нашел
// function cancelEvent(evt) {
//   evt.preventDefault();
// }

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

function changeText() {
  setTextContentFromInputValue(userName, inputUserName);
  setTextContentFromInputValue(userDescription, inputUserDescription);
  switchPopup()
  // cancelEvent();
}


console.log(inputUserName.value)
