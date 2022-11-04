myApp.controller("rentCartCtrl", [
    '$scope', 
    'carService', 
    'rentService', 
    '$location', 
    '$uibModal', 
    function ($scope, carService, rentService, $location, $uibModal) {

        const carIdParsed = parseInt($location.search().carro_id);

        const rentCompleted = {
            'car_id': [carIdParsed],
            'rent_started_at': $location.search().inicio,
            'rent_end_at': $location.search().fim,
            'city': $location.search().cidade,
        };

        const getQuery = () => {
        
            $scope.city = $location.search().cidade
            $scope.start_rent = $location.search().inicio
            $scope.end_rent = $location.search().fim
            $scope.car_id = $location.search().carro_id

            carService.showFull($scope.car_id).then(response => {
                $scope.cars = response.data;
                // console.log($scope.cars);
            }).catch((e) => console.log(e))
        }

        const openLoginModal = () => {
            const modalInstance = $uibModal.open({
                templateUrl: 'view/loginModal.html',
                controller: 'loginModalCtrl',
                size: 'full',
                backdropClass: 'modal-css'
            })

            modalInstance.result.then(() => {
                login();
                modalInstance.close()
                console.log('FECHADO');
            })
        }

        const finishRent = () => {
            rentService.create(rentCompleted).then(() => {
                $state.go('userpage')
            }).catch((e) => {
                if (!localStorage.getItem('token')) {
                    openLoginModal();
                    return;
                }
                console.log(e);
            })
        }

        $scope.finishRent = finishRent;
        getQuery();
}]);