
angular.module('flickrSearch', [])
.controller('flickrController', function($http, $scope) {
	// var vm = this;

	init();

	function init() {
		$scope.isSearching = false;
		$scope.results = [];
	}

	$scope.submitSearch = function(){
		console.log($scope.searchTerm);
		$scope.isSearching = true;

        $http({
            method: 'GET',
            url: 'https://api.flickr.com/services/rest',
            params: {
                method: 'flickr.photos.search',
                api_key: '5668c5d67efada1001e7cf29c62e373c',
                text: $scope.searchTerm,
                format: 'json',
                nojsoncallback: 1
            }
        }).success(function (data) {
            $scope.results = data;
             $scope.isSearching = false;
        }).error(function (error) {
            console.error(error);
            // $scope.isSearching = true;
        });

		// var url = "https://api.flickr.com/services/rest";
		// var request = {
 	// 	   	method: 'flickr.photos.search',
		//     api_key: "5668c5d67efada1001e7cf29c62e373c",
		//     tags: vm.searchTerm,
		//     format: 'json',
		//     nojsoncallback: 1
		// };

		// return $http({
		// 	method: 'GET',
		// 	url: url,
		// 	params: request
		// })
		// .success(function(data) {
		// 	vm.results = data;
		// 	return vm.results;
		// 	console.log(vm.results[1].title);
		// },
		// function(response) {
		// 	alert('error');
		// });

	};
});