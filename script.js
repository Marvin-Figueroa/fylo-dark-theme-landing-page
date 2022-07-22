const registerButton = document.querySelector(".register-cta");
const registerEmail = document.querySelector("#email");
const inputsContainer = document.querySelector(".register-inputs");
const basicEmailRegExp =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

registerButton.addEventListener("click", () => {
  if (!basicEmailRegExp.test(registerEmail.value)) {
    inputsContainer.classList.add("email-error");
  } else {
    registerEmail.value = "";
    inputsContainer.classList.remove("email-error");
  }
});

registerButton.addEventListener("blur", () => {
  inputsContainer.classList.remove("email-error");
});
