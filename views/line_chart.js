var LineChartView = Backbone.View.extend({	
	initialize: function (activityData) {
		this.$el = $('div#graph');
		this.render(activityData);
	},
	
	render: function (activityData) {
		nums = [];
		[0, 30, 60, 70, 90, 95, 100].forEach( function (num) { 
			nums.push(num / activityData);
		});
		
		// https://github.com/willf/ruby_google_charts/blob/master/examples/examples.html
		var content = '<img id="line-chart" src="http://chart.apis.google.com/chart?cht=lc&amp;chs=500x200&amp;chd=t:' + nums.join(",") + '&amp;" alt="Chart"/>'
		this.$el.html(content);
		return this;
	}
});