var PieChartView = Backbone.View.extend({	
	initialize: function (deviceData) {
		this.$el = $('div#devices');
		this.render(deviceData);
	},
	
	render: function (deviceData) {
        var data = google.visualization.arrayToDataTable([
			['Task', 'Hours per Day'],
			['Mobile',  deviceData['mobile']],
			['Desktop', deviceData['desktop']],
			['Tablet',  deviceData['tablet']]
        ]);
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data);
		return this;
	}
});
