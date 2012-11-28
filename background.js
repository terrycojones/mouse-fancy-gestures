var MGS = {

    init: function(){
        console.log('Extension initialized!');
        
        chrome.tabs.onUpdated.addListener(
            function(tabId, changeInfo, tab){
                console.log('Tab ' + tabId + ' updates (' + changeInfo.status + ') to ' + tab.url);
            }
        );
    }
};

MGS.init();
