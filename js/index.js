var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = '2016\'s Best Games'; 
  $scope.promo = 'The most popular games this year.';
  $scope.products = [
  	{ 
    	name: 'Overwatch', 
    	price: 19, 
    	pubdate: new Date('2016', '05', '25'), 
    	cover: 'https://overwatch-a.akamaihd.net/img/logos/overwatch-share-3d5a268515283007bdf3452e877adac466d579f4b44abbd05aa0a98aba582eeaebc4541f1154e57ec5a43693345bebda953381a7b75b58adbd29d3f3eb439ad2.jpg',
    	likes: 0,
      dislikes:0
  	}, 
  	{ 
    	name: 'Battlefield 1', 
    	price: 8, 
    	pubdate: new Date('2016', '10', '21'), 
    	cover: 'http://media-www-battlefieldwebcore.spark.ea.com/content/battlefield-portal/en_US/_global_/_jcr_content/ccm/componentwrapper_1/components/opengraph/ogImage.img.jpg',
    	likes: 0 ,
      dislikes:0
  	}, 
  	{ 
    	name: 'Final Fantasy XV', 
    	price: 11.99, 
    	pubdate: new Date('2016', '11', '29'), 
    	cover: 'https://i.ytimg.com/vi/F36bQfylUfo/maxresdefault.jpg',
    	likes: 0 ,
      dislikes:0
  	}, 
  	{ 
    	name: 'Tom Clancy: The Division', 
    	price: 7.99, 
    	pubdate: new Date('2016', '04', '11'), 
    	cover: 'http://screenrant.com/wp-content/uploads/Tom-Clancy-The-Division-Wallpaper.jpg',
    	likes: 0 ,
      dislikes:0
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
  $scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
	};
}]);