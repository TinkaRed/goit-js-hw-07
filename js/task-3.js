// done
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
const trimmedInputValue = nameInput.value.trim();
nameOutput.textContent = trimmedInputValue ? trimmedInputValue : "Anonymous";
}
);
