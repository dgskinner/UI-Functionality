var todayIndexes = [];
var threeDayIndexes = [];
var sevenDayIndexes = [];
var fourteenDayIndexes = [];

var findIndexes = function () {
	var indexHash = {};
	for (var i = 0; i < lsz - 1; i++) {
		var day = Date[i].slice(2, 4);
		if (indexHash[day] == undefined) {
			indexHash[day] = [i];
		} else {
			indexHash[day].push(i);
		}
	}
	todayIndexes.push(indexHash[31]);
	for (var j = 29; j < 32; j++) {
		threeDayIndexes.push(indexHash[j]);
	}
	for (var j = 25; j < 32; j++) {
		sevenDayIndexes.push(indexHash[j]);
	}
	for (var j = 18; j < 32; j++) {
		fourteenDayIndexes.push(indexHash[j]);
	}
};

findIndexes();

var countMales = function (indexes) {
	var maleCount = 0;
	indexes.forEach( function (day) {
		for (var i in day) {
			if (Gender[i] == "male") {
				maleCount++;
			}
		}
	});
	return maleCount;
};

var genderCounts = function (indexes) {
	var numMales = countMales(indexes);
	// var total = indexes.length;
	var total = 0;
	indexes.forEach( function (day) {
		total += day.length;
	});
	var counts = {
		all: total,
		males: numMales,
		females: total - numMales
	}
	return counts;
};

var countMobile = function (indexes) {
	var mobileCount = 0;
	indexes.forEach( function (day) {
		for (var i in day) {
			if (Device[i] == "mobile") {
				mobileCount++;
			}
		}
	});
	return mobileCount;
};

var countDesktop = function (indexes) {
	var desktopCount = 0;
	indexes.forEach( function (day) {
		for (var i in day) {
			if (Device[i] == "desktop") {
				desktopCount++;
			}
		}
	});
	return desktopCount;
};

var deviceCounts = function (indexes) {
	var numMobile = countMobile(indexes);
	var numDesktop = countDesktop(indexes);
	var total = 0;
	indexes.forEach( function (day) {
		total += day.length;
	});
	var counts = {
		mobile: numMobile,
		desktop: numDesktop,
		tablet: total - numMobile - numDesktop
	}
	return counts;
};

var timeBins = function (indexes) {
	var bins = [];
	indexes.forEach( function (day){
		var amBin = [];
		var pmBin = [];
		day.forEach( function (index) {
			var amPm = Time[index].slice(-2);
			if (amPm === "AM") {
				amBin.push(index);
			} else {
				pmBin.push(index);
			}
		});
		bins.push(amBin, pmBin);
	});
	return bins;
};

var countActivity = function (bin) {
	var activityCounter = 0;
	bin.forEach( function (index) {
		if (Activity[index] == 1) {
			activityCounter++;
		}
	});
	return activityCounter / bin.length * 100;
};

var activityCounts = function (indexes) {
	var activity = [];
	var bins = timeBins(indexes);
	bins.forEach( function (bin) {
		activity.push(countActivity(bin));
	});
	return activity;
};

var timeFrames = {
    1: {gender: genderCounts(todayIndexes), device: deviceCounts(todayIndexes), activity: activityCounts(todayIndexes)},
	3: {gender: genderCounts(threeDayIndexes), device: deviceCounts(threeDayIndexes), activity: activityCounts(threeDayIndexes)},
	7: {gender: genderCounts(sevenDayIndexes), device: deviceCounts(sevenDayIndexes), activity: activityCounts(sevenDayIndexes)},
	14: {gender: genderCounts(fourteenDayIndexes), device: deviceCounts(fourteenDayIndexes), activity: activityCounts(fourteenDayIndexes)}
};

new MainView(timeFrames);







