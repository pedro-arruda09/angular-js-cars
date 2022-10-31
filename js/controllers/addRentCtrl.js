myApp.controller("addRentCtrl", function ($scope, carService, rentService, capitalService, $location, $q) {
    $scope.form = {
        car_id: ''
    };

    $scope.cars = [];

    const init = () => {
        listCars();
        listCapitals();
        addCar();
    }

    const listCars = () => {
        return carService.get().then(resp => {
            $scope.cars = resp.data;
        }).catch(() => {
            $scope.error = "Unable to load data.";
        }); 
    };

    const addCar = () => {
        console.log($scope.cars);
        $scope.cars.forEach(car => {
            if (car.id === ~~$scope.form.car_id) {
                car.selected = true;
            }
        });

        $scope.form.car_id = ''
    }

    const addRent = () => {
        console.log($scope.rent)
        return
        rentService.create($scope.rent).then(() => {
            $location.path('/')
        }).catch(error => {
            console.log(error);
        });
    };

    const listCapitals = () => {
        return capitalService.get().then(resp => {
            $scope.capitals = resp.data;
        }).catch(() => {
            $scope.error = "Unable to load data.";
        });
    };

    $scope.addRent = addRent;
    init();
});