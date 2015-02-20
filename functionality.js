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

var countMobile = function (indexes) {
	var mobileCount = 0;
	for (var i in indexes) {
		if (Device[i] == "mobile") {
			mobileCount++;
		}
	}
	return mobileCount;
};

var countDesktop = function (indexes) {
	var desktopCount = 0;
	for (var i in indexes) {
		if (Device[i] == "desktop") {
			desktopCount++;
		}
	}
	return desktopCount;
};

var deviceCounts = function (indexes) {
	var numMobile = countMobile(indexes);
	var numDesktop = countDesktop(indexes);
	var counts = {
		mobile: numMobile,
		desktop: numDesktop,
		tablet: indexes.length - numMobile - numDesktop
	}
	return counts;
}

var timeFrames = {
    1: {gender: genderCounts(todayIndexes), device: deviceCounts(todayIndexes), activity: 1},
	3: {gender: genderCounts(threeDayIndexes), device: deviceCounts(threeDayIndexes), activity: 2},
	7: {gender: genderCounts(sevenDayIndexes), device: deviceCounts(sevenDayIndexes), activity: 3},
	14: {gender: genderCounts(fourteenDayIndexes), device: deviceCounts(fourteenDayIndexes), activity: 4}
};

new MainView(timeFrames);







