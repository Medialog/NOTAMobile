(function(global) {
    
        showLoading: function (message, _kendoApp) {
            $(".loading-message").text(message ? message : "Loading...");
            _kendoApp.showLoading();
        };
        
        showError: function (message, error) {
            var errorMessage = message + (error === undefined ? "" : "\n" + error.status + ": " + error.statusText);
            $("#error-view .message").text(errorMessage);
            $("#error-view").show().data().kendoMobileModalView.open();
        };
})(window);
