window.UIFunctionality = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		Backbone.history.start();
	}
};

$(UIFunctionality.initialize);

var todayIndexes = [];
var threeDayIndexes = [];
var sevenDayIndexes = [];
var fourteenDayIndexes = [];

var findIndexes = function () {
	for (var i = 0; i < lsz - 1; i++) {
		var day = Date[i].slice(2, 4);
		if (day == 31) {
			todayIndexes.push(i);
		}
		if (day > 28) {
			threeDayIndexes.push(i);
		}
		if (day > 24) {
			sevenDayIndexes.push(i);
		}
		if (day > 17) {
			fourteenDayIndexes.push(i);
		}
	}
};

findIndexes();






