const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileRole = document.querySelector(".profile__role");
const nameInput = document.querySelector(".popup__input_profile_name");
const roleInput = document.querySelector(".popup__input_profile_role");
const formElement = document.querySelector(".popup__form");
const likeButtons = document.querySelectorAll(".card__like-button");

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  roleInput.value = profileRole.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const newName = nameInput.value;
  const newRole = roleInput.value;

  profileName.textContent = newName;
  profileRole.textContent = newRole;

  closePopup();
}

function toggleLike(evt) {
  evt.target.classList.toggle("card__like-button_active");
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleProfileFormSubmit);
likeButtons.forEach(function (button) {
  button.addEventListener("click", toggleLike);
});
