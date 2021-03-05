const myList = [
    {id: 1, title: 'First list item', done: true},
    {id: 2, title: 'Second list item', done: false}
];

function MyCounter(myList) {
    return myList.length();
}

function render() {
    myList.forEach(el => {
        const listItem = document.createElement('li');
        const listItemText = document.createTextNode(el.title);
        listItem.appendChild(listItemText);
        document.getElementById('list').appendChild(listItem);
        List();
    });
}

render();

function addToList() {
    const todoInputValue = document.getElementById('todoInput').value;

    if (todoInputValue) {
        myList.push({
            id: 1,
            title: todoInputValue,
        });
    }
    console.log(myList);

    document.getElementById('list').innerHTML = null;
    render();
}

function DeleteAllTasks() {
    document.getElementById('list').innerHTML = null;
    document.getElementsByTagName('span')[0].innerText = 0;
}

let count = 0;
const counterSelector = document.getElementById('counter');

function List() {
    const currentCounter = Number(document.getElementsByTagName('span')[0].innerText);
    const newCounter = myList.length;
    document.getElementsByTagName('span')[0].innerText = newCounter;
}

function plusOne() {
    const currentCounter = Number(document.getElementsByTagName('span')[0].innerText);
    const newCounter = currentCounter + 1;
    document.getElementsByTagName('span')[0].innerText = newCounter;
}

function minusOne() {
    const currentCounter = Number(document.getElementsByTagName('span')[0].innerText);
    const newCounter = currentCounter - 1;
    document.getElementsByTagName('span')[0].innerText = newCounter;
}

function changeText() {
    let h3Text = document.getElementsByTagName('h3')[0].innerText =
        "Please enter new task...";
    h3Text = document.getElementsByTagName('h3')[0].style.color = "red";
    h3Text = document.getElementsByTagName('h3')[0].style.fontSize = "12px";
}