app.factory('AngularOOPInstanceService', AngularOOPInstanceService);

function AngularOOPInstanceService(){
    return {
        'Item' : Item,
    }

    function Item(item_id, name, type, price){
        this.item_id = item_id;
        this.name = name;
        this.type = type;
        this.price = price;
    }
}
