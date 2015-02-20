var MainView = Backbone.View.extend({
	initialize: function (timeFrames) {
		this.timeFrames = timeFrames;
		this.$el = $('body');
		this.render(1);
	},
	
	events: {
		'click button.timeframe': 'updateTimeFrame'
	},
	
	render: function (timeFrame) {
		var genderData = this.timeFrames[timeFrame]["gender"];
		new NumbersView(genderData);
		var deviceData = this.timeFrames[timeFrame]["device"];
		new PieChartView(deviceData);
	},
	
	updateTimeFrame: function () {
		var timeFrame = $(event.target).data('timeframe');
		this.render(timeFrame);
	}
});