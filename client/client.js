/**
 * Created by user on 1/15/16.
 */
var app = angular.module('serviceApp', []);


app.controller('MainController', ['$scope', 'ThetaService', function($scope, ThetaService){
    $scope.thetaInformation = ThetaService.thetaStuff;
}]);


app.factory('ThetaService', function(){

    function getRandomNumber(min,max){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    function getStudents(){
        var num = getRandomNumber(0 ,2);
        if(num == 0){
            return 'a lot';
        }else if(num == 1){
            return 'way too many';
        }else{
            return 'not enough';
        }
    }


    var thetaInfo = {
        name: 'Theta',
        numOfStudents: 22,
        spiritAnimal: 'Wolverine',
        getStudents: getStudents,
        school: 'Prime Academy',
        location: {
            state: 'MN',
            city: 'Bloomington'
        },
        country: 'USA',
        language: function(){
            return 'Javascript'
        }
    }
    return {thetaStuff: thetaInfo}
});



