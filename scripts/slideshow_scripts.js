$(document).ready(function(){

  //give clicked images in the slide show the highlight class in their respective pages to ease search time
  $("li img").click(function(){
    localStorage.setItem("image", $(this).attr("src"));
    localStorage.setItem("name", $(this).attr("title"));
    localStorage.setItem("description", $(this).attr("alt"));
  });
  //slide button logic
  $(".next").click(function(){
    var activeSlideContainer = $(".slide-container-active");
    var nextSlideContainer = activeSlideContainer.next("ul");

    activeSlideContainer.removeClass("slide-container-active");
    nextSlideContainer.addClass("slide-container-active");
    
    if (nextSlideContainer.length == 0){ 
      $("#first-slide").addClass("slide-container-active");
    }

    $("#slide-description-container h1").text($(".slide-container-active li:last-child").text());
    $(window).scrollTop(0);
   
   
  });
  
  $(".prev").click(function(){
    var activeSlideContainer = $(".slide-container-active");
    var prevSlideContainer = activeSlideContainer.prev("ul");

    activeSlideContainer.removeClass("slide-container-active");
    prevSlideContainer.addClass("slide-container-active");
    
    if (prevSlideContainer.length == 0){ 
      $("#last-slide").addClass("slide-container-active");
    }
    
    $("#slide-description-container h1").text($(".slide-container-active li:last-child").text());
    $(window).scrollTop(0);
  });


});