(function (global) {
    var ProgramsViewModel,
    app = global.app = global.app || {},
    servicePath = "http://staging.medialogeuropa.com/NOTAWebApi";
    //servicePath = "http://localhost:57788";

    ProgramsViewModel = kendo.data.ObservableObject.extend({
        allDataSource: null,
        latestVideoClipsDataSource: null,
        latestDataSource: null,
        weekMostTalkedAboutDataSource: null,
        
        init: function () {
            var that = this,
                dataSourceAll,
                dataSourceLatestVideoClips,
                dataSourceLatest,
                dataSourceWeekMostTalkedAbout;
            
            kendo.data.ObservableObject.fn.init.apply(that, []);
            
            dataSourceAll = new kendo.data.DataSource({
                transport: {
            		read: {
            			url: servicePath + "/api/programs/AllPrograms?json=true",
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
            			url: servicePath + "/api/programs/LatestVideoClips?json=true",
            			contentType: "application/json; charset=utf-8",
            			type: "GET",
            			dataType: "json"
            		}
                },  
                serverPaging: false,
                pageSize: 30,
                change: function(e) {
            		var data = this.data();
                    console.log("LatestVideoClips: " + data);
            	}
            });

            dataSourceLatest = new kendo.data.DataSource({
                transport: {
            		read: {
            			url: servicePath + "/api/programs/LatestPrograms?json=true",
            			contentType: "application/json; charset=utf-8",
            			type: "GET",
            			dataType: "json"
            		}
                },  
            	change: function(e) {
            		var data = this.data();
                    console.log("Latest: " + data);
            	}
            });

            dataSourceWeekMostTalkedAbout = new kendo.data.DataSource({
                transport: {
            		read: {
            			url: servicePath + "/api/programs/WeekMostTalkedAboutPrograms?json=true",
            			contentType: "application/json; charset=utf-8",
            			type: "GET",
            			dataType: "json"
            		}
                },  
            	change: function(e) {
            		var data = this.data();
                    console.log("WeekMostTalkedAbout: " + data);
            	}
            });
            
            that.set("allDataSource", dataSourceAll);
            that.set("latestVideoClipsDataSource", dataSourceLatestVideoClips);
            that.set("latestDataSource", dataSourceLatest);
            that.set("weekMostTalkedAboutDataSource", dataSourceWeekMostTalkedAbout);
        }        
    });  
    
    app.programsService = {
        viewModel: new ProgramsViewModel()
    };
    
})(window)
