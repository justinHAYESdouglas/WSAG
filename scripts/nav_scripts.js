$(document).ready(function(){
  //dropdown menu
  $("nav li").click(function(){
    $("nav a").css("display", "none").css;
    $(this).children().css("display", "block");
  });
  
  /**to avoid a lot of extra HTML & CSS, these <li>s will act as <a>s
  for index.html and about.html **/
  $("nav li:first-child, #logo, #mobile-logo").click(function(){
    window.location.href = "index.html";
  });

  $("nav li:last-child").click(function(){
    window.location.href = "about.html";
  });

  //hamburger menu animation
  $("header button").click(function(){
    $("nav ul").toggle(700);
    $("#burger").fadeToggle(700);
  });

  //prevent nav ul from disapearing on full sized screens when using hamburger menu
  $(window).on('resize', function(){
    if ($(this).width() > 1032) { 
      $("nav ul").css("display", "block");
    } if (($(this).width() <= 1032)){
      $("nav ul").css("display", "none");
    }
  });

  //empty categories will lead to temp.html until more pieces are gathered
  $("a[href='generaldrawing.html'], a[href='advanceddrawing.html'], a[href='3Ddesign.html'], a[href='watercolor.html'], a[href='printmaking.html'], a[href='independentsculpprojv.html']").click(function(e){
    e.preventDefault();
    window.location.href = "temp.html";
  })
});