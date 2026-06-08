const actionButton = document.getElementById("action-button");
const flame = document.getElementById("the-fire");

function handleClick() {
    flame.style.visibility = "visible";
    actionButton.removeEventListener("click", handleClick);
}

actionButton.addEventListener("click", handleClick);