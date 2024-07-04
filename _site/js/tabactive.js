// code from: https://stackoverflow.com/a/66497946
$(document).ready(function(){
  let switching = true;
  const defaultOpen = "Home";

  $("button[data-place=" + defaultOpen + "]").addClass("active");
  $("div[data-place=" + defaultOpen + "]").fadeIn(250, function(){
    $(this).addClass("active");
    switching = false;
  });

  $(".tablinks").click(function(){
    const switchToAttr = $(this).attr("data-place");
    const switchTo = $("div[data-place=" + switchToAttr + "]");
    const prevDiv = $("div.active");

    if(!switching && switchToAttr != prevDiv.attr("data-place")){
      switching = true;

      $("button.active").removeClass("active");
      prevDiv.removeClass("active");

      $(this).addClass("active");
      switchTo.addClass("active");

      prevDiv.fadeOut(250, function(){
        switchTo.fadeIn(250);
        switching = false;
      });

    }

  });

});