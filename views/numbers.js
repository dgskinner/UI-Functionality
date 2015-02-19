var NumbersView = Backbone.View.extend({	
	initialize: function (timeFrame) {
		this.$el = $('div#segments');
		this.render(timeFrame);
	},
	
	render: function (timeFrame) {
		var content = "<h1>Segments</h1><table id='male-female'> <tr> <td>All</td><td>" + timeFrame['all'] + "</td> </tr> <tr> <td>Male</td><td>" + timeFrame['males'] + "</td> </tr> <tr> <td>Female</td><td>" + timeFrame['females'] + "</td> </tr> </table>"
		// this.$el.html(content);
		$('div#segments').html(content);
		return this;
	}
});

// <h1>Segments</h1>
// <table id="male-female">
// 	<tr>
// 		<td>All</td><td><%= total %></td>
// 	</tr>
// 	<tr>
// 		<td>Male</td><td><%= males %></td>
// 	</tr>
// 	<tr>
// 		<td>Male</td><td><%= females %></td>
// 	</tr>
// </table>