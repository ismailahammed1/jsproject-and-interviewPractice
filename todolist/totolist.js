let text = document.getElementById("text");
let addtask = document.getElementById("addtask");
let Element = [];
console.log(Element);

addtask.onclick = () => {  
    const name = text.value;
    Element.push(name);

    let list = document.createElement("li");
    let textNode = document.createTextNode(name); // Create a text node with the value

    list.appendChild(textNode); // Append the text node to the list item

    let listname = document.getElementById('listContainer');
    listname.appendChild(list); // Append the list item to the list container

    console.log(Element);
}
