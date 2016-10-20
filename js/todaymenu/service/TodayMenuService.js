app.factory('TodayMenuService', TodayMenuService);

function TodayMenuService(){
    return {
        'flag' : flag
    }

    function flag(bool){
		return !bool;
	}
}
