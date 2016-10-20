app.factory('TodayMenuInstanceService', TodayMenuInstanceService);

function TodayMenuInstanceService(){
    return {
        'Food' : Food,
    }

    function Food(food_id, name, comment){
        this.food_id = food_id;
        this.name = name;
        this.comment = comment;
    }
}
