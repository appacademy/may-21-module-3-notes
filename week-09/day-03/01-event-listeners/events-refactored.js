function changeRed() {
    const redInput = document.getElementById("red-input");
    const cb = e => {
        let value = e.target.value.trim().toLowerCase();
        if (value === "red") {
            redInput.style.backgroundColor = "red";
        } else {
            redInput.style.backgroundColor = "transparent";
        }
    }

    return cb;
};

function addLi() {
    const ul = document.querySelector("#part-2 > ul");
    const cb = e => {
        const input = document.querySelector("#list-add")
        const value = input.value;
        const newLi = document.createElement("li");
        newLi.innerText = value;
        ul.appendChild(newLi);
        input.value = '';
    };

    return cb;
}

function changeColor() {
    const cb = e => {
        const section = document.getElementById("part-3");
        section.style.backgroundColor = e.target.value;
    }
    return cb;
};

function removeEventListeners(args) {
    const removeListeners = document.getElementById("remove-listeners");
    removeListeners.addEventListener("click", e => {
        args.forEach(({ element, event, cb }) => {
            element.removeEventListener(event, cb);
        });
    })
}

function addEventListeners(args) {
    args.forEach((ele) => {
        const { element, event, cb } = ele;
        console.log(ele);
        
        element.addEventListener(event, cb);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    // PART 0
    alert("DOM LOADED");

    const eventListeners = [
        {
            element: document.getElementById("red-input"),
            event: 'input',
            cb: changeRed()
        },
        {
            element: document.getElementById("add-item"),
            event: 'click',
            cb: addLi()
        },
        {
            element: document.getElementById("color-select"),
            event: 'input',
            cb: changeColor()
        },
    ];
    addEventListeners(eventListeners);
    removeEventListeners(eventListeners);
});


