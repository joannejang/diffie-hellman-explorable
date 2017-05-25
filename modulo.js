"use strict";

var diffieHellmanApp = angular.module('diffieHellmanApp', []);

diffieHellmanApp.controller('ModuloController', ['$scope', function($scope) {
   // We defined an object called 'main' with a single property 'title' that is used
   // by the html view template to get the page's title in the browser tab.
    $scope.guess1 = '';
    $scope.answer1 = '';

    $scope.checkAnswer1 = function() {
    	if($scope.guess1.length === 0) {
    		$scope.answer1 = '';
    	} else if($scope.guess1 === '4') {
    		$scope.answer1 = 'Correct!';
    	} else {
    		$scope.answer1 = 'try again!';
    	}
    }

    $scope.guess2 = '';
    $scope.answer2 = '';
    $scope.attempts = 0;

    $scope.checkAnswer2 = function() {
    	if($scope.guess2.length === 0) {
    		$scope.answer2 = '';
    	} else if($scope.guess2 === '602') {
    		$scope.answer2 = 'Woah u got it!';
    	} else {
    		$scope.answer2 = 'try again!';
    		$scope.attempts++;
    	}
    }

    $scope.possible = [];
    var last = 10; 
    for (var i = 0; i < 10; i++) {
        var curr = 4*i + 2;
        $scope.possible.push(curr);
    }
    $scope.showMore = function() {
        var upper = last + 10;
        for ( ; last < upper; last++) {
            var curr = 4*last + 2;
            $scope.possible.push(curr);
        }
    }
}]);