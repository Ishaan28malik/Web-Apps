const itemOperations = {
    items:[],
    add(itemObject){
        this.items.push(itemObject);
    },
    remove(){
            this.items=this.items.filter(itemObject=>!itemObject.isMarked);
            return this.items;
    },
    search(){

    },
    sort(){

    },
    update(){

    },
}