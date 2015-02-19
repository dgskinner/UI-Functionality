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
		new NumbersView(this.timeFrames[timeFrame]);
		// new PieChartView
	},
	
	updateTimeFrame: function () {
		var timeFrame = $(event.target).data('timeframe');
		this.render(timeFrame);
	}
});