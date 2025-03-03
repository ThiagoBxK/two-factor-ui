let code = "";

function focusOnInput(index, direction) {
  index += direction;
  const input = document.querySelector(
    `.auth-input-box [data-index='${index}']`
  );

  input && input.focus();
}

function handleInputEvent(input, event) {
  input.value = input.value.replace("/[^0-9]/g", "").slice(0, input.maxLength);
  let index = Number(input.dataset.index);

  if (event.code === "Backspace") focusOnInput(index, -1);
  else if (input.value.length >= input.maxLength) focusOnInput(index, 1);

  updateCode();
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function updateCode() {
  const inputs = document.querySelectorAll(".auth-input-box [data-index]");
  const button = document.getElementById("auth-button");

  code = "";
  for (input of inputs) code += input.value;

  code.length === inputs.length
    ? button.classList.remove("hidden")
    : button.classList.add("hidden");
}
