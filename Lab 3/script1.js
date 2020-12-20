"use strict";

let saveButton = document.getElementById("saveButton");
let textArea = document.getElementById("textarea");
let ul = document.querySelector("ul");
let clearButton = document.getElementById("clearButton");

saveButton.addEventListener("click", addMessageAfterClick);
clearButton.addEventListener("click", clearTextArea);

function textLength() {
    return textArea.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(document.getElementById("textarea").value));
    ul.appendChild(li);
    textArea.valueOf().value = "";
    let deleteItemButton = document.createElement("button");
    deleteItemButton.appendChild(document.createTextNode("X"));
    li.appendChild(deleteItemButton);
    addLikeButton(li);
    deleteItemButton.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete")
    }
}

// do not create message without text
function addMessageAfterClick() {
    if (textLength() > 0) {
        createListElement()
    }
}

//clear text from textarea
function clearTextArea() {
    if (textLength() > 0) {
        textArea.valueOf().value = "";
    }
}

function addLikeButton(tag) {
    let likeButton = document.createElement("button");
    likeButton.id = "likeButton";
    likeButton.appendChild(document.createTextNode("♥"));
    let div = document.createElement("div");
    let input = document.createElement("input");
    input.type = "text";
    input.value = "0";

    div.appendChild(likeButton);
    div.appendChild(input);
    tag.appendChild(div);

    likeButton.addEventListener("click", () => input.value = parseInt(input.value, 10) + 1);
}

