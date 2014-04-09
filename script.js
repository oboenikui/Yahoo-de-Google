window.onload=function(){
    document.getElementById("srchtxt").name="q";
    document.getElementsByTagName("form")[0].action="http://www.google.com/search";
    var scripts = document.getElementsByTagName("script");
    for(var i=0;i<scripts.length;i++){
	if(scripts[i].src.indexOf("/javascript/fp_base_bd_ga")!=-1){
	    scripts[i].src="http://dl.dropboxusercontent.com/u/89996208/yahoo_de_google.js";
	}
    }
};

