var MainView = Backbone.View.extend({
	initialize: function (timeFrames) {
		this.timeFrames = timeFrames;
		this.$el = $('body');
		this.render(1);
	},
	
	events: {
		'click button.timeframe': 'updateTimeFrame',
		'click h5': 'updateGenderData'
	},
	
	render: function (timeFrame, gender) {
		var genderData = this.timeFrames[timeFrame]["gender"];
		new TableView(genderData);
		var deviceData = this.timeFrames[timeFrame]["device"];
		new PieChartView(deviceData);
		var activityData = this.timeFrames[timeFrame]["activity"];
		new LineChartView(activityData);
	},
	
	updateTimeFrame: function () {
		var timeFrame = $(event.target).data('timeframe');
		this.render(timeFrame);
	},
	
	updateGenderData: function () {
		
	}
});