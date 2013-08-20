(function (global) {
    var notaProgramsDataSource = new kendo.data.DataSource({
    	transport: {
    		read: {
    			url: "http://staging.medialogeuropa.com/NOTAWebApi/api/programs?json=true",
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
    }),
    latestVideoClipsDataSource,
    latestProgramsDataSource;

    getPrograms = function () {
        notaProgramsDataSource.fetch(
            function(){
                    
                latestVideoClipsDataSource = notaProgramsDataSource.at(0).LatestVideoClips;
                latestProgramsDataSource = notaProgramsDataSource.at(0).LatestPrograms;
                
                   //$("#programsWeekMostTalkingAboutview").kendoMobileListView({
                   // dataSource: notaProgramsDataSource.at(0).WeekMostTalkingAboutPrograms,
                   // template: kendo.template($("#template_program").html())
                   // });
    
    /*                $("#programsLatestVideoClipsview").kendoMobileScrollView({
                        dataSource: {
                            data: notaProgramsDataSource.at(0).LatestVideoClips,
                            serverPaging: false,
                            pageSize: 6
                        },
                        itemsPerPage: 1,
                        template: $("#template_latestvideoclips_program").html(),
                        contentHeight: "auto",
                        enablePager: false
                    });
    */                
                   //$("#programsLatestUpdatesview").kendoMobileListView({
                    //dataSource: notaProgramsDataSource.at(0).LatestPrograms,
                    //template: kendo.template($("#template_program").html())
                    //});
                 
        });            
    };

})(window)
