app.controller('AngularOOPController', AngularOOPController);

function AngularOOPController($scope, AngularOOPService) {
    $scope.flag = AngularOOPService.flag(true);
    alert($scope.flag);

}