$(document).ready(function () {
  $("button").click(function () {
    
    $("form").slideDown(200);
    
    $("button").css({
      border: "none",
      cursor: "default",
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "0px",
    });

    $("form").css({
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px",
    }); 
    
    $("#email").focus();
  });
});
