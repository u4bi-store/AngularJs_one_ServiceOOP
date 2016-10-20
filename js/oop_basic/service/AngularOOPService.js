app.factory('AngularOOPService', AngularOOPService);

function AngularOOPService(){
    return {
        'flag' : flag
    }

    function flag(bool){
		return !bool;
	}
}
