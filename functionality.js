// window.UIFunctionality = {
// 	Models: {},
// 	Collections: {},
// 	Views: {},
// 	Routers: {},
// 	initialize: function() {
// 		Backbone.history.start();
// 	}
// };

// $(UIFunctionality.initialize);

Backbone.history.start();

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


var countMales = function (indexes) {
	var maleCount = 0;
	for (var i in indexes) {
		if (Gender[i] == "male") {
			maleCount++;
		}
	}
	return maleCount;
};

var genderCounts = function (indexes) {
	var numMales = countMales(indexes);
	var total = indexes.length;
	var counts = {
		all: total,
		males: numMales,
		females: total - numMales
	}
	return counts;
}



var timeFrames = {
    1: genderCounts(todayIndexes),
	3: genderCounts(threeDayIndexes),
	7: genderCounts(sevenDayIndexes),
	14: genderCounts(fourteenDayIndexes)
};

new MainView(timeFrames);







