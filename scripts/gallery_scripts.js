$(document).ready (function(){

	//set the highlighted image to the clicked thumbnail image
	$("#thumbnail-container img").click(function(){
		$(".highlight").attr("src",$(this).attr("src"));
		$(".highlight").attr("title",$(this).attr("title"));
		$(".highlight").attr("alt",$(this).attr("alt"));
    $("#highlight-container").css("display", "block");
	  $("#artist-name").text($(this).attr("title"));
		$("#piece-description").text($(this).attr("alt"));
		$(window).scrollTop(0);
	});

	//set the highlighted image to the clicked slide in index.html
	var slideImage = localStorage.getItem("image");
	var slideName = localStorage.getItem("name");
	var slideDesc = localStorage.getItem("description");

	$(".highlight").attr("src", slideImage);
	$(".highlight").attr("title", slideName);
	$(".highlight").attr("alt", slideDesc);

	$("#artist-name").text(slideName);
	$("#piece-description").text(slideDesc);

	if(localStorage.length > 0){
		$("#highlight-container").css("display", "block");
		localStorage.clear();
	};
});