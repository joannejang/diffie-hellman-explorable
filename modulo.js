"use strict";

var diffieHellmanApp = angular.module('diffieHellmanApp', []);

diffieHellmanApp.controller('ModuloController', ['$scope', function($scope) {
   // We defined an object called 'main' with a single property 'title' that is used
   // by the html view template to get the page's title in the browser tab.
    $scope.guess1 = '';
    $scope.answer1 = 'XX';

    $scope.checkAnswer1 = function() {
        if($scope.guess1 === '4') {
            $scope.answer1 = 'CORRECT';
            $('#answer1').css('background-color','#b8efa2');
            $('#answer1').css('color','#75aa5f');
            $('#answer1').css('border','1px solid #75aa5f');
        } else {
            $scope.answer1 = 'INCORRECT';
            $('#answer1').css('background-color','#fc9c9c');
            $('#answer1').css('color','#ce4848');
            $('#answer1').css('border','1px solid #ce4848');
            $('#answer1').addClass('animated shake');
            $('#answer1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('animated shake');
            });
        }
    }

    $scope.guess2 = '';
    $scope.answer2 = 'XX';
    $scope.attempts = 0;

    $scope.checkAnswer2 = function() {
        if($scope.guess2.length === 0) {
        } else if($scope.guess2 === '602') {
            $scope.answer2 = 'CORRECT';
            $('#answer2').css('background-color','#b8efa2');
            $('#answer2').css('color','#75aa5f');
            $('#answer2').css('border','1px solid #75aa5f');
            $scope.attempts++;
        } else {
            $scope.answer2 = 'INCORRECT';
            $('#answer2').css('background-color','#fc9c9c');
            $('#answer2').css('color','#ce4848');
            $('#answer2').css('border','1px solid #ce4848');
            $('#answer2').addClass('animated shake');
            $('#answer2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('animated shake');
            });
            $scope.attempts++;
        }
    }

    $scope.possible = [];
    var last = 12; 
    for (var i = 0; i < 12; i++) {
        var curr = 4*i + 2;
        $scope.possible.push(curr);
    }
    $scope.showMore = function() {
        var upper = last + 12;
        for ( ; last < upper; last++) {
            var curr = 4*last + 2;
            $scope.possible.push(curr);
        }
    }
}]);