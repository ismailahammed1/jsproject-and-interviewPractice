let text = document.getElementById("text");
let addtask = document.getElementById("addtask");
let Element = [];

addtask.onclick = () => {  
    const name = text.value;
    Element.push(name);

    let tbody = document.querySelector('table tbody'); 

    let row = document.createElement("tr"); 
    let idCell = document.createElement("td");
    let taskCell = document.createElement("td"); 
    let statusCell = document.createElement("td"); 
    let editCell = document.createElement("td");
    let deleteCell = document.createElement("td"); 

    idCell.textContent = Element.length; 
    taskCell.textContent = name; 
    statusCell.textContent = "Pending"; 
    editCell.innerHTML = '<button class="text-blue-500 hover:text-blue-700 mr-2">Edit</button>';
    deleteCell.innerHTML = '<button class="text-red-500 hover:text-red-700">Delete</button>';

    row.appendChild(idCell);
    row.appendChild(taskCell);
    row.appendChild(statusCell);
    row.appendChild(editCell);
    row.appendChild(deleteCell);

    tbody.appendChild(row); 

    console.log(Element);
}
