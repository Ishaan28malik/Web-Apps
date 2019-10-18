window.addEventListener("load",bindEvents);
function bindEvents(){
     document.getElementById("add").addEventListener("click",addRecord);
     document.getElementById('delete').addEventListener("click",deleteRecords);
}

function addRecord(){
    var item = new Item();
    for(let key in item){
        if(key!='check')
            item[key] = document.getElementById(key).value;
    }
    itemOperations.add(item);
    for (let key in item){
        console.log(item[key]);
    }
    printRecord(item);
}
function printRecord(item){
    var tbody =document.querySelector('#items');
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in item){
        if(key !='check' ){
            let cell =tr.insertCell(index);
            cell.innerText = item[key];
            index++;
        }
    }
//    let cell =tr.insertCell(index);
//    cell.innerHTML = '<i class="fas fa-trash"></i>';
    var lastID =tr.insertCell(index);
    lastID.appendChild(createIcon('fas fa-trash mr-2',trash,item.id));
//    lastID.appendChild(createIcon('fas fa-edit',edit,item.id));
}
function createIcon(className,fn,id){
    var iTag =document.createElement("i");
    iTag.className=className;
    iTag.addEventListener('click',fn);
    iTag.setAttribute("data-itemid",id);
    return iTag;
}
function trash(){
    let id =this.getAttribute('data-itemid');
//    itemOperations.markUnMark(id);
//    showtOTAL();
    let tr =this.parentNode.parentNode;
    tr.classList.toggle('alert-danger');
    console.log("",this.getAttribute('data-itemid'));
}
function deleteRecords(){
    var items = itemOperations.remove();
    printTable(items);
}
function printTable(items){
    var tbody = document.querySelector('items');
    tbody.innerHTML = '';
    items.forEach(item=>printRecord(item));

}