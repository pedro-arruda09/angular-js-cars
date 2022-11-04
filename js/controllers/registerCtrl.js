myApp.controller("registerCtrl",[
    '$scope', 
    'userService', 
    '$state', 
    function ($scope, userService, $state) {

        const addUsers = () => {
            return userService.create($scope.user).then(() => {
                $state.go('login')
            }).catch(error => {
                console.log(error);
            });
        };

        $scope.addUsers = addUsers
}]);