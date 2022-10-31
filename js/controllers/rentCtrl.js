myApp.controller("rentCtrl", function ($scope, carService, rentService, $location, userService, $stateParams) {
    const init = () => {
        userService.show($stateParams.id).then(response => {
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
                if (!$scope.userRents.length) {
                    console.log('oi');
                }
                console.log($scope.userRents);
            }).catch(() => {
                $scope.error = "Unable to load data.";
            }); 
    };

    const addRent = () => {
        return rentService.create($scope.rent).then(() => {
            $location.path('/aluguel/pdf')
        }).catch(error => {
            console.log(error);
        });
    };

    const listCars = () => {
        return carService.get().then(resp => {
            $scope.cars = resp.data;
        }).catch(() => {
            $scope.error = "Unable to load data.";
        }); 
    }


    listUserRents();
    init();
    listRents();
    listCars();
    $scope.addRent = addRent;
});