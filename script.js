function newElement() {
    var value = document.getElementsByClassName('new-task')[0].value;
    var list = document.getElementsByClassName('task-list')[0];
    var newItem = document.createElement('li');
    var newText = document.createTextNode(value);
    newItem.appendChild(newText);
    newItem.classList.add('task');
    newItem.onclick = function () {
        checkItem(this);
    };
    list.appendChild(newItem);
    document.getElementsByClassName('new-task')[0].value = '';
}
function checkItem(element) {
    element.classList.toggle('checked');
}
function clearElements() {
    var list = document.getElementsByClassName('task-list')[0];
    list.innerHTML = "";
}