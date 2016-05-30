document.addEventListener('DOMContentLoaded', function () {
	var data = chrome.extension.getBackgroundPage().articleData;
	/*
	if(data.error){
		$("#message").text(data.error);
		$("#content").hide();
	}else{
		$("#message").hide();
		$("#content-title").text(data.title);
		$("#content-author").text(data.author);
		$("#content-date").text(data.postDate);
		$("#content-first-access").text(data.firstAccess);
	}*/

    if (data.title.trim().length < 100) {
    	$("#content").load("http://localhost:5000/chrome", {title : data.title}, function(data) {
        	//alter(data);
        	document.documentElement.innerHTML = data;

		});
    }


});
