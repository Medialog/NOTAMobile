(function (global) {
    var ProgramsViewModel,
    app = global.app = global.app || {};

    ProgramsViewModel = kendo.data.ObservableObject.extend({
        programsDataSource: null,
        latestVideoClipsDataSource: null,
        latestProgramsDataSource: null,
        
        init: function () {
            var that = this,
                dataSource;
            
            kendo.data.ObservableObject.fn.init.apply(that, []);
            
            dataSource = new kendo.data.DataSource({
                transport: {
            		read: {
//            			url: "http://staging.medialogeuropa.com/NOTAWebApi/api/programs?json=true",
            			url: "http://localhost:57788/api/programs/AllPrograms?json=true",
            			contentType: "application/json; charset=utf-8",
            			type: "GET",
            			dataType: "json"
            		}
                },  
            	change: function(e) {
            		var data = this.data();
                    console.log("All Programs: " + data);
            	}
            });

            dataSourceLatestVideoClips = new kendo.data.DataSource({
                transport: {
            		read: {
//            			url: "http://staging.medialogeuropa.com/NOTAWebApi/api/programs?json=true",
            			url: "http://localhost:57788/api/programs/LatestVideoClips?json=true",
            			contentType: "application/json; charset=utf-8",
            			type: "GET",
            			dataType: "json"
            		}
                },  
            	change: function(e) {
            		var data = this.data();
                    console.log("LatestVideoClips: " + data);
            	}
            });
            
            //dataSource.read();
            
            //console.log("DataSource: " + dataSource);
            
            that.set("programsDataSource", dataSource);
            that.set("latestVideoClipsDataSource", dataSourceLatestVideoClips);
        }        
    });  
    
    app.programsService = {
        viewModel: new ProgramsViewModel()
    };
    
})(window)
