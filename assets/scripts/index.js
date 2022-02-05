const list = document.getElementById("ul");
const input = document.getElementById("add-input");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
  const li = `
  <li class="list-group-item d-flex justify-content-between">
      ${input.value} <button class="btn btn btn-danger">-</button>
  </li>
  `;
  list.insertAdjacentHTML("beforeend", li);
  input.value = "";
  input.focus();
});
