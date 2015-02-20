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
	}
});

// <div class="pie" data-start="0" data-value="30"></div>
// <div class="pie highlight" data-start="30" data-value="30"></div>
// <div class="pie" data-start="60" data-value="40"></div>
// <div class="pie big" data-start="100" data-value="260"></div>
