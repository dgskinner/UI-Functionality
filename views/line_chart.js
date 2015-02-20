var LineChartView = Backbone.View.extend({	
	initialize: function (activityData) {
		this.$el = $('#graph-buttons');
		this.activityData = activityData;
		this.render(activityData);
	},
	
	events: {
		'click button#mean-line': 'showMeanLine',
		'click button#trend-line': 'showTrendLine'
	},
	
	render: function (activityData, optionalString) {
		var nums = [];
		[0, 30, 60, 70, 90, 95, 100].forEach( function (num) { 
			nums.push(num / activityData);
		});
		var numString1 = nums.join(",");
		var numString2 = optionalString || "";
		// https://github.com/willf/ruby_google_charts/blob/master/examples/examples.html
		var content = '<img id="line-chart" src="http://chart.apis.google.com/chart?cht=lc&amp;chs=500x200&amp;chd=t:' + numString1 + numString2 + '&amp;" alt="Chart"/>'
		$('div#graph').html(content);
		return this;
	},
	
	showTrendLine: function () {
		var nums = [0, 30, 60, 70, 90, 95, 100];
		var mid = Math.floor(nums.length / 2);
		var firstHalf = nums.slice(0, mid);
		var secondHalf = nums.slice(mid);
		var p1 = this.sum(firstHalf) / firstHalf.length;
		var p2 = this.sum(secondHalf) / secondHalf.length;
		var string = '|' + p1 + ',' + p2;
		this.render(this.activityData, string);
	},
	
	showMeanLine: function () {
		var nums = [0, 30, 60, 70, 90, 95, 100];
		var avg = this.sum(nums) / nums.length;
		var string = '|' + avg + ',' + avg;
		this.render(this.activityData, string);
	},
	
	sum: function (numbers) {
		var sum = 0;
		numbers.forEach( function (n) {
			sum += n;
		});
		return sum;
	}
});