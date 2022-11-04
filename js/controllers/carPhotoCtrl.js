// myApp.controller("carPhotoCtrl", function ($scope, carPhotoService) {
//     // const init = () => {
//     //     $q.all([listUsers()])
//     // }

//     const listCarPhotos = () => {
//         return carPhotoService.get().then(resp => {
//                 $scope.carPhotos = resp.data;
//             }).catch(() => {
//                 $scope.error = "Unable to load data.";
//             }); 
//     };

//     listCarPhotos();
// });