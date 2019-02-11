var objectplanet;if(!objectplanet){objectplanet={}}if(!objectplanet.forsakens){objectplanet.forsakens={}}objectplanet.forsakens.JQUERY_VERSION="1.10.2";
var $opj;objectplanet.forsakens.getParamOPP=function(a,c){c=c.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b="[\\?&]"+c+"=([^&#]*)";
var e=new RegExp(b);var d=e.exec(a);if(d==null){return""}else{return d[1]}};objectplanet.forsakens.addScript=function(b,f){var d=document.getElementsByTagName("script");
for(i=0;i<d.length;i++){var c=d[i].src.indexOf(b);if(0<=c){return}}var a=document.getElementsByTagName("head")[0];var e=document.createElement("script");
e.type="text/javascript";e.src=b;if(f){e.onload=f}e.onreadystatechange=function(){if(f&&(this.readyState=="complete"||this.readyState=="loaded")){f()
}};a.appendChild(e)};objectplanet.forsakens.loadJQ=function(b){if(window.jQuery===undefined||window.jQuery.fn.jquery!==objectplanet.forsakens.JQUERY_VERSION){var a="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
objectplanet.forsakens.addScript(a,function(){$opj=window.jQuery.noConflict();b()})}else{$opj=window.jQuery;b()}};objectplanet.forsakens.loadJS=function(a){objectplanet.forsakens.addScript(objectplanet.forsakens.emPollURL+"/poll.js",a)
};objectplanet.forsakens.doPollOPP=function(){var a=["http://www.objectplanet.com/opinio/","http://www.facebook.com/WebConan.Indonesia/","https://www.murvey.com","http://www.facebook.com/WebConan.Indonesia/"];
$opj(".OPP-EM").each(function(){var g=$opj(this).text();var d=$opj(this).hasClass("OPP-C");if(d){var e=$opj(this).parent().next().attr("href");
if(!(e==a[0]||e==a[1]||e==a[2]||e==a[3])){$opj(this).show().text("You can not remove the poll link");return}}$opj(this).remove();
var c=objectplanet.forsakens.emPollURL.substring(0,objectplanet.forsakens.emPollURL.indexOf("ext/"))+"poll?jsoncallback=?";var b=$opj("#OPP-poll-id-"+g);
b.data("OPP_BASEURL",c);var f={command:"getPoll",pollId:(d?"":g),containerId:(d?g:"")};$opj.getJSON(c,f,function(h){if(h.resultCode=="0"){h.style=$opj.parseJSON(h.styleString);
b.pollOPP("init",{poll:h})}else{b.html("<span style='font-family: arial;'>Poll is not available.<br><a href='www.webconan.blogspot.com'>www.webconan.blogspot.com</a><span>")
}})})};objectplanet.forsakens.scriptArray=document.getElementsByTagName("script");objectplanet.forsakens.emPollURL="";objectplanet.forsakens.emPollFullURL="";
for(i=0;i<objectplanet.forsakens.scriptArray.length;i++){var URLIndex=objectplanet.forsakens.scriptArray[i].src.indexOf("/emPoll.js?");
if(0<URLIndex){objectplanet.forsakens.emPollFullURL=objectplanet.forsakens.scriptArray[i].src;objectplanet.forsakens.emPollURL=objectplanet.forsakens.emPollFullURL.substring(0,URLIndex)
}}objectplanet.forsakens.emPollPollId=objectplanet.forsakens.getParamOPP(objectplanet.forsakens.emPollFullURL,"p");objectplanet.forsakens.emContainerId=objectplanet.forsakens.getParamOPP(objectplanet.forsakens.emPollFullURL,"c");
var isContainer=objectplanet.forsakens.emContainerId?true:false;document.write('<div align="center" id="OPP-poll-id-'+(isContainer?objectplanet.forsakens.emContainerId:objectplanet.forsakens.emPollPollId)+'"><div style="display: none;" class="OPP-EM '+(isContainer?"OPP-C":"")+'">'+(isContainer?objectplanet.forsakens.emContainerId:objectplanet.forsakens.emPollPollId)+"</div></div>");
objectplanet.forsakens.loadJQ(function(){objectplanet.forsakens.loadJS(function(){$opj(function(){objectplanet.forsakens.doPollOPP()})
})});