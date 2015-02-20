var NumbersView = Backbone.View.extend({	
	initialize: function (genderData) {
		this.$el = $('table#male-female');
		this.render(genderData);
	},
	
	render: function (genderData) {
		var content = "<tr> <td>All</td><td>" + genderData['all'] + "</td> </tr> <tr> <td>Male</td><td>" + genderData['males'] + "</td> </tr> <tr> <td>Female</td><td>" + genderData['females'] + "</td> </tr>"
		this.$el.html(content);
		return this;
	}
});


// 	<tr>
// 		<td>All</td><td><%= total %></td>
// 	</tr>
// 	<tr>
// 		<td>Male</td><td><%= males %></td>
// 	</tr>
// 	<tr>
// 		<td>Male</td><td><%= females %></td>
// 	</tr>