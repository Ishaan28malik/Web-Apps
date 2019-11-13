window.addEventListener("load",bindEvents);
function bindEvents(){
     document.getElementById("add").addEventListener("click",addRecord);
}

function addRecord(){
    var p = document.getElementById("Rollno").value;
    var d = document.getElementById("name").value;
    var c = document.getElementById("DOB").value;
    var e = String(document.getElementById("cgpa").value*10) + "%";
    var item = new Item(p,d,c,e);
    itemOperations.add(item);
    printRecord(item);
}
function printRecord(item){
    var tbody =document.querySelector('#items');
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in item){
            let cell =tr.insertCell(index);
            cell.innerText = item[key];
            index++;
    }

}

function printTable(items){
    var tbody = document.querySelector('#items');
    tbody.innerHTML="";
    items.forEach(item=>printRecord(item));

}