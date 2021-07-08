const input = document.querySelector(".form-control");
const btn = document.querySelector(".btn");
const listGroup = document.querySelector(".list-group");
const check = document.querySelector(".form-check-input");
const label = document.querySelector(".form-check-label");
const div = document.querySelector(".block");

const todoList = [
    {
        value: "milk",
        check: true,
    },
];

btn.addEventListener("click", () => {
    console.log(input.value);
    todoList.push({
        value: input.value,
        check: false,
    });
    listGroup.innerHTML = "";
    drawList();
    input.value = "";
});

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        console.log(input.value);
        todoList.push({
            value: input.value,
            check: false,
        });
        console.log(todoList);

        listGroup.innerHTML = "";
        drawList();
        input.value = "";
    }
});

function drawList() {
    for (let i = 0; i < todoList.length; i++) {
        listGroup.insertAdjacentHTML(
            "beforeend",
            `<li class="list-group-item list-group-item-${
                i % 2 === 0 ? "primary" : "secondary"
            }">
                <div class="form-check">
                    <div class = "block"></div>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">${
                        todoList[i].value
                    }</label>
                </div>
            </li>`
        );
    }
}

check.addEventListener("click", () => {
    if (label.toggleAttribute("checkedText")) {
        label.classList.add("checkedText");
    } else {
        label.classList.remove("checkedText");
    }
});

div.addEventListener("click", () => {
    // check.setAttribute("checked", "true");
    console.log(12);
    // div.classList.add("block1");
});
