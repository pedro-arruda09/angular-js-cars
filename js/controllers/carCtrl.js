myApp.controller("carCtrl", function ($scope, carService, rentService, capitalService, carPhotoService, $location, $q, $uibModal) {
    const init = () => {

        // carService.get().then(response => {
        //     $scope.cars = response.data.map(car => {
        //         return {
        //             ...car,
        //             selected: false
        //         }
        //     })
        //     console.log($scope.cars);
        // })

        const promisesList = [
            listCars(),
            listCapitals(),
            listCarPhotos(),
            availableCars()
        ];

    
        $q.all(promisesList).then((resp) => {
            console.log(resp[0].data);
            $scope.availableCars = resp[0].data
            $scope.photos = resp[2].data

            $scope.carsData = [];
            $scope.availableCars.forEach(car => {
                car.photo = $scope.photos.find(photo => photo.car_id === car.id);
                $scope.carsData.push(car)
                // console.log($scope.availableCars);
            })
            
        })
    }

    const availableCars = () => {
        return rentService.availableCars().then(resp => {
            $scope.availableCars = resp.data;
        }).catch(() => {
            $scope.error = "Unable to load data.";
        }); 
    }

    const listCars = () => {
        return carService.get();
    };

    const addCars = () => {
        return carService.create($scope.car).then(() => {
            $scope.carForm.$setPristine();
            $location.path('/')
        }).catch(error => {
            console.log(error);
        });
    };

    const addRent = () => {
        console.log($scope.capitals)
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

    const listCarPhotos = () => {
        return carService.getPhotos()
    };

    const addCar = () => {
        $scope.cars.forEach(car => {
            console.log($scope.form.car_id);
            if (car.id === ~~$scope.form.car_id) {
                car.selected = true;
                console.log(car.selected);
            }
        });



        $scope.form.car_id = '';
    };

    const openCarModal = () => {
        const modalInstance = $uibModal.open({
            templateUrl: 'view/carModal.html',
            controller: 'loginModalCtrl',
            size: 'full',
            backdropClass: 'modal-css'
        })

        modalInstance.result.then(() => {
            // login();
        })
    }

    $scope.addCar = addCar;
    $scope.addCars = addCars;
    $scope.addRent = addRent;
    $scope.listCapitals = listCapitals;
    $scope.openCarModal = openCarModal;
    init();
});