function onPageDetailsReceived(details) {
	//document.getElementById('output').innerText = details.summary;

    if (details.summary != null && details.summary.trim().length < 100) {
    	$("#content").load("http://localhost:5000/chrome", {title : details.summary}, function(data) {

    		document.documentElement.innerHTML = data;

		});
    }

}
// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in 
        // our onPageDetailsReceived function as the callback. This injects 
        // content.js into the current tab's HTML
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});
