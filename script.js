var url = location.toString();
var queries = url.split("?")[1].split("&");
var getKeyWord = function(){
    var keyWord;
    for(var i=0;i<queries.length;i++){
	if(queries[i].split("=")[0]=="p"){
	    keyWord = queries[i].split("=")[1];
	    break;
	}
    }
    return keyWord;
}
var hosts = url.split("://")[1].split(".");
if(hosts[1]=="shopping"){
    location.replace("https://www.google.com/search?tbm=shop&q="+getKeyWord());
} else {
    switch(hosts[0]){
    case "search":
	location.replace("https://www.google.com/search?q="+getKeyWord());
	break;
    case "image":
	location.replace("https://www.google.com/search?tbm=isch&q="+getKeyWord());
	break;
    case "video":
	location.replace("https://www.google.com/search?tbm=vid&q="+getKeyWord());
	break;
    case "map":
	location.replace("https://maps.google.co.jp/maps?q="+getKeyWord());
	break;
    case "news":
	location.replace("https://www.google.com/search?tbm=nws&q="+getKeyWord());
	break;
    }
}
