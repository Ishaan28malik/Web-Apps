const itemOperations = {
    items:[],
    add(itemObject){
        this.items.push(itemObject);
    },
    remove(){
            this.items=this.items.filter(itemObject=>!itemObject.isMarked);
            return this.items;
    },
    search(id){
            return this.items.find(itemObject=>itemObject.id==id);
    },
    markUnMark(id){
    if(this.search(id).isMarked==true)
    {
        this.search(id).isMarked=false;
    }
    else
    this.search(id).isMarked=true;
    },
    sort(){

    },
    update(){

    }
}