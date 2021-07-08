const input = document.querySelector(".form-control");
const btn = document.querySelector(".btn");
const listGroup = document.querySelector(".list-group");

//  получение данных из localStorage и преобразование обратно в js
const todo = JSON.parse(localStorage.getItem("todo"));

const todoList = todo ? todo : [];

function drawItem(value) {
    return `
    <li class="list-group-item list-group-item-info">
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                />
                    <label
                        class="form-check-label"
                        for="flexCheckChecked"
                    >
                        ${value}
                    </label>
        </div>
    </li>
    `;
}

const todoList = [];

btn.addEventListener("click", () => {
    todoList.push({
        value: input.value,
        checked: false,
    });
    // преобразуем в JSON массив todoList
    const stringTodo = JSON.stringify(todoList);
    console.log(todoList);
    console.log(strringTodo);
    // помещаем нашу строку в localStorage

    listGroup.insertAdjacentHTML("beforeend", drawItem(input.value));
    input.value = "";
});
document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        console.log(input.value);
        todoList.push(input.value);
        listGroup.innerHTML = "";
        drawList();
        input.value = "";
    }
});

function drawList() {
    for (let i = 0; i < todoList.length; i++) {
        listGroup.insertAdjacentHTML(
            "beforeend",
            `
        <li class="list-group-item list-group-item-info">
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    />
                        <label
                            class="form-check-label"
                            for="flexCheckChecked"
                        >
                            ${todoList[i]}
                        </label>
            </div>
        </li>
        `
        );
    }
}
