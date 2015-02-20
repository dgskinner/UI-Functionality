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
		var content = '<img id="line-chart" src="http://chart.apis.google.com/chart?cht=lc&amp;chs=500x200&amp;chd=t:' + nums.join(",") + '&amp;" alt="Chart"/>'
		// 0,30,60,70,90,95,100|20,30,40,50,60,70,80
		this.$el.html(content);
		return this;
	}
});