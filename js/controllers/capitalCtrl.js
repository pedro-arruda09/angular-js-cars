// myApp.controller("capitalCtrl", function ($scope, capitalService, $location) {
//     // const init = () => {
//     //     listcapitals();
//     //     addcapitals();
//     // }

//     const listCapitals = () => {
//         return capitalService.get().then(resp => {
//                 $scope.capitals = resp.data;
//                 console.log(resp.data);
//             }).catch(() => {
//                 $scope.error = "Unable to load data.";
//             }); 
//     };

//     const addCapitals = () => {
//         return capitalService.create($scope.capital).then(() => {
//             // delete $scope.capital;
//             $scope.capitalForm.$setPristine();
//             $location.path('/')
//         }).catch(error => {
//             console.log(error);
//         });
//     };

//     // const showcapital = capitalId => {
//     //     capitalId = 147;
//     //     console.log(capitalId);
//     //     capitalService.show(capitalId)
//     //     .then((resp) => {
//     //         $scope.capitals = resp.data;
//     //             // const remodledPatient = {...patient};
//     //             // remodledPatient.age = calculateAge(patient.borned_at);
            
//     //         // $scope.patientData = remodledPatient;
//     //     })
//     //     .catch(error => {
//     //         // Swal.fire({
//     //         //     icon: 'warning',
//     //         //     title: 'Atenção',
//     //         //     text: error.data,
//     //         //   });
//     //     });
//     // };

//     // $scope.addcapitals = addCapitals;
//     listCapitals();
//     // showcapital();
// });