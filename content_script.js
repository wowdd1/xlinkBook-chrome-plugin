/*
var postInfo = $("div.postDesc");
if(postInfo.length!=1){
	chrome.runtime.sendMessage({type:"cnblog-article-information", error:"获取文章信息失败."});
}
else{
	var msg = {
		type: "cnblog-article-information",
		title : $("#cb_post_title_url").text(),
		postDate : postInfo.find("#post-date").text(),
		author : postInfo.find("a").first().text(),
		url: document.URL
	};
	chrome.runtime.sendMessage(msg);
}*/

//window.onload = function(){
    document.documentElement.onmouseup = function(){
        if(window.getSelection().toString().trim().length != 0){
            var select = window.getSelection().toString();

            var msg = {
				type: "xlinkBook",
				title : select,
				postDate : "",
				author : "",
				url: document.URL
			};
			chrome.runtime.sendMessage(msg);
			//alert(select);
        }
    }
//}
