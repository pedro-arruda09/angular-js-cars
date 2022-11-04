myApp.controller("storeRentCtrl",[
    '$scope', 
    '$location', 
    'userService', 
    'capitalService', 
    function ($scope, $location, userService, capitalService) {
        const init = () => {
            userService.show().then(response => {
                $scope.user = response.data;
            }).catch((e) => console.log(e))
        }

        const listCapitals = () => {
            if (!$scope.capitalName) {
                $scope.capitals = [];
                return [];
            }

            return capitalService.suggest($scope.capitalName).then(resp => {
                $scope.capitals = resp.data;
                console.log($scope.capitals[0].id, 'oi')
            }).catch(() => {
                $scope.error = "Unable to load data.";
            });
        };

        const setQueryString = () => {
            $location
            .path('/escolher-carro')
            .search({
                'cidade': $scope.capitalName,
                'inicio': moment($scope.rent_started_at).format('YYYY-MM-DD'),
                'fim': moment($scope.rent_end_at.moment).format('YYYY-MM-DD')
            })
        }

        $scope.setQueryString = setQueryString;
        $scope.listCapitals = listCapitals;
        init();
}]);