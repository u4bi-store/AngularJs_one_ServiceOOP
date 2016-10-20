app.factory('TodayMenuService', TodayMenuService);

function TodayMenuService(){
    return {
        'flag' : flag,
        'randomRange' : randomRange
    }

    function flag(bool){
		return !bool;
	}

    function randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
