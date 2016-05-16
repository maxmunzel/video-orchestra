function image (src) {
	black();
	$("#theatre").prepend($("<img>"));
	$("img").attr("src","media/"+src);
}
function video(src){
	black();
	$("#theatre").prepend($("<video>"));
	$("video").attr("width","100%");
	$("video").attr("src", "media/"+src);
	$("video").get(0).play();


}
function video_loop(src){
	video(src);
	$("video").attr("loop","loop");
}
function black (argument) {
	$("#theatre").empty();
}
function action(slide){
	var type = show[slide].type;
	if (type=="image"){
		image(show[slide].src);

	}
	else if (type == "black"){
		black();
	}
	else if(type == "video"){
		video(show[slide].src);
	}
	else if(type == "video_loop"){
		video_loop(show[slide].src);
	}

	else{
		alert("Error! Unknown type: "+type);
	}


}
var slide = -1;
$(document).ready(function(){
	$("body").keypress(function() {
		next();
	});
});

function next(){
	slide++;
	if (slide<=show.length-1){
		action(slide);
	}
}

function reset(){
	slide = 0
	action(0);
}
