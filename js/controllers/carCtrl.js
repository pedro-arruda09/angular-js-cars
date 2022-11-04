// myApp.controller("carCtrl", function ($scope, carService, rentService, capitalService, carPhotoService, $location, $q, $uibModal) {

//     const addCars = () => {
//         return carService.create($scope.car).then(() => {
//             $scope.carForm.$setPristine();
//             $location.path('/')
//         }).catch(error => {
//             console.log(error);
//         });
//     };

//     const addRent = () => {
//         rentService.create($scope.rent).then(() => {
//             if (!localStorage.getItem("token")) {
//                 $location.path('/login')
//             }
//         }).then(() => {
//             $location.path('/')
//         }).catch(error => {
//             console.log(error);
//         });
//     };

//     const listCarPhotos = () => {
//         return carService.getPhotos()
//     };

//     const addCar = () => {
//         $scope.cars.forEach(car => {
//             // console.log($scope.form.car_id);
//             if (car.id === ~~$scope.form.car_id) {
//                 car.selected = true;
//                 console.log(car.selected);
//             }
//         });

//         $scope.form.car_id = '';
//     };

//     $scope.addCar = addCar;
//     $scope.addCars = addCars;
//     $scope.addRent = addRent;
// });