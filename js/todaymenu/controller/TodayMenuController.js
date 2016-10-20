app.controller('TodayMenuController', TodayMenuController, TodayMenuInstanceService);

function TodayMenuController($scope, $interval, TodayMenuService, TodayMenuInstanceService) {

    $scope.flag = TodayMenuService.flag(true);
    //alert($scope.flag);

    var food = [];

    food[0] = new TodayMenuInstanceService.Food(1, '짜장면', '12년 전통의 손수 발로 면발을 다듬은 짜장면발');
    food[1] = new TodayMenuInstanceService.Food(2, '짬봉', '짬봉의 명가 짬짬뽕');
    food[2] = new TodayMenuInstanceService.Food(3, '떡볶이', '옆집 아저씨가 먹다 죽은 떡볶이');

    $interval(function () {
        var ran = randomRange(0, 2);
        $scope.food = food[ran];
    }, 500);

    function randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}