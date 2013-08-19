var notaProgramsDataSource = new kendo.data.DataSource({
	transport: {
		read: {
			url: "http://staging.medialogeuropa.com/NOTAwebApi/api/programs?json=true",
			contentType: "application/json; charset=utf-8",
			type: "GET",
			dataType: "json"
		}
	},  
	change: function(e) {
        console.log(e);
		var data = this.data();
        console.log(data);
	}
});