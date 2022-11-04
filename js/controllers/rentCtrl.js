myApp.controller('rentCtrl',[
    '$scope', 
    'carService', 
    'rentService', 
    'userService', 
    '$uibModal',
    function ($scope, carService, rentService, userService, $uibModal) {
        const init = () => {
            userService.show().then(response => {
                $scope.user = response.data;
            }).catch((e) => console.log(e))
        }

        const listRents = () => {
            return rentService.get().then(resp => {
                $scope.rents = resp.data;
            }).catch(() => {
                $scope.error = "Unable to load data.";
            });
        };

        const listUserRents = () => {
            return rentService.userRent().then(resp => {
                $scope.userRents = resp.data;
                console.log($scope.userRents);
                if (!$scope.userRents.length) {
                    // console.log('oi');
                }
            }).catch(() => {
                $scope.error = "Unable to load data.";
            });
        };

        const listCars = () => {
            return carService.get().then(resp => {
                $scope.cars = resp.data;
            }).catch(() => {
                $scope.error = "Unable to load data.";
            });
        };
        
        const openRentCartModal = () => {
            return $uibModal.open({
                templateUrl: 'view/totalRentModal.html',
                controller: 'totalRentModalCtrl',
                size: 'full',
                backdropClass: 'modal-css'
            })
        }

        const cancel = (cancel) => {
            // $uibModal.close(cancel);
        }

        const returnRent = (rentId, carId) => {
            return rentService.return(rentId, carId).then(() => {
                Swal.fire({
                    title: 'Deseja devolver a reserva?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Devolver',
                    denyButtonText: `Não devolver`,
                }).then((result) => {
                    if (result.isConfirmed) {   
                        localStorage.setItem("rent_id", rentId);
                        openRentCartModal();
                    } else if (result.isDenied) {
                        Swal.fire('Sua reserva não foi devolvida', '', 'info')
                    }
                })
            }).catch((e) => console.log(e));
        }

        init();
        listUserRents();
        listRents();
        listCars();
        $scope.listCars = listCars
        $scope.returnRent = returnRent;
        $scope.openRentCartModal = openRentCartModal;
        $scope.cancel = cancel;
}]);