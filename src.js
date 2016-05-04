(function() {
	var app = angular.module('store',[]);

	app.controller('StoreController',function() {
		this.product = gem;
	});

	var gem = {
		name: 'Decahedron',
		price: 2.95,
		description: 'this is original description.this is original descriptionthis is original descriptionthis is original descriptionthis is original description',
		canPurchase: true,
		isSold: false
	}
})();
