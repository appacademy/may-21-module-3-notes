function addShoppingItem(event) {
    event.preventDefault();
    const shoppingList = document.getElementById("shopping-list");
    const name = document.getElementById("name");
    const type = document.getElementById("type");

    const li = document.createElement("li");
    li.innerText = name.value;
    // li.setAttribute("data-type", type.value);
    li.dataset.type = type.value;
    shoppingList.appendChild(li);

    name.value = "";
    type.value = "dairy";
}

window.addEventListener("DOMContentLoaded", event => {
    document.getElementById("add")
        .addEventListener("click", addShoppingItem);
});