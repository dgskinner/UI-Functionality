var TableView = Backbone.View.extend({	
	initialize: function (genderData) {
		this.$el = $('table#male-female');
		this.render(genderData);
	},
	
	render: function (genderData) {
		var content = "<tr> <td><h5 data-gender='all'>All</h5></td><td>" + genderData['all'] + "</td> </tr> <tr> <td><h5 data-gender='male'>Male</h5></td><td>" + genderData['males'] + "</td> </tr> <tr> <td><h5 data-gender='all'>All</h5></td><td>" + genderData['females'] + "</td> </tr>"
		this.$el.html(content);
		return this;
	},
});