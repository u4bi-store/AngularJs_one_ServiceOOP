app.controller('AngularOOPController', AngularOOPController, AngularOOPInstanceService);

function AngularOOPController($scope, AngularOOPService, AngularOOPInstanceService) {

    $scope.flag = AngularOOPService.flag(true);
    //alert($scope.flag);

    var weapon = [];
    var bullet = [];

    weapon[0] = new AngularOOPInstanceService.Item(1, 'DE 본체', 'weapon', 5000);
    weapon[1] = new AngularOOPInstanceService.Item(2, 'Ak-47 본체', 'weapon', 15000);
    weapon[2] = new AngularOOPInstanceService.Item(3, 'M24 Sniper-gun 본체', 'weapon', 30000);

    bullet[0] = new AngularOOPInstanceService.Item(1, '50 AE 1세트', 'bullet', 500);
    bullet[1] = new AngularOOPInstanceService.Item(2, '7.62×39mm 1세트', 'weapon', 1500);
    bullet[2] = new AngularOOPInstanceService.Item(3, '.338 Lapua Magnum 1세트', 'weapon', 5000);
    /* AngularOOPInstanceService.Item(id, name, type, price) */

    $scope.weapon = weapon;
    $scope.bullet = bullet;
}