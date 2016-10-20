app.controller('TodayMenuController', TodayMenuController, TodayMenuInstanceService);

function TodayMenuController($scope, $interval, TodayMenuService, TodayMenuInstanceService) {

    $scope.flag = TodayMenuService.flag(true);
    //alert($scope.flag);

    var food = [];
    var foodTimer;
    var remoteName = ['멈춤','돌림'];

    init();
    function init(){
        food[0] = new TodayMenuInstanceService.Food(1, '짜장면', '12년 전통의 손수 발로 면발을 다듬은 짜장면발');
        food[1] = new TodayMenuInstanceService.Food(2, '짬봉', '짬봉의 명가 짬짬뽕');
        food[2] = new TodayMenuInstanceService.Food(3, '떡볶이', '옆집 아저씨가 먹다 죽은 떡볶이');
        start();
        remoteManager(0);
    }

    $scope.remote = function(type){
        type == 1 ? $interval.cancel(foodTimer) : start();
        remoteManager(type);
    }

    function start(){
        foodTimer = $interval(function () {
            var ran = TodayMenuService.randomRange(0, 2);
            $scope.food = food[ran];
        }, 100);
    }

    function remoteManager(type){
        var temp = 0;
        if(type == 0 ) temp =1;
        $scope.remoteName = remoteName[type];
        $scope.remoteType = temp;
    }

}