var LineChartView = Backbone.View.extend({	
	initialize: function (activityData) {
		this.$el = $('#graph-buttons');
		this.activityData = activityData;
		this.render();
	},
	
	events: {
		'click button#mean-line': 'showMeanLine',
		'click button#trend-line': 'showTrendLine'
	},
	
	render: function (optionalString) {
		var numString1 = this.activityData.join(",");
		var numString2 = optionalString || "";
		// https://github.com/willf/ruby_google_charts/blob/master/examples/examples.html
		var content = '<img id="line-chart" src="http://chart.apis.google.com/chart?cht=lc&amp;chs=800x200&amp;chd=t:' + numString1 + numString2 + '&amp;" alt="Chart"/>'
		$('div#graph').html(content);
		return this;
	},
	
	showTrendLine: function () {
		var mid = Math.floor(this.activityData.length / 2);
		var firstHalf = this.activityData.slice(0, mid);
		var secondHalf = this.activityData.slice(mid);
		var p1 = this.sum(firstHalf) / firstHalf.length;
		var p2 = this.sum(secondHalf) / secondHalf.length;
		var string = '|' + p1 + ',' + p2;
		this.render(string);
	},
	
	showMeanLine: function () {
		var avg = this.sum(this.activityData) / this.activityData.length;
		var string = '|' + avg + ',' + avg;
		this.render(string);
	},
	
	sum: function (numbers) {
		var sum = 0;
		numbers.forEach( function (n) {
			sum += n;
		});
		return sum;
	}
});