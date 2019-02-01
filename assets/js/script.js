$(function() {
  let heightOfHeader = $(".header").outerHeight();
  $("body").css("marginTop", heightOfHeader);

  $(window).on("resize", function() {
    let heightOfHeader = $(".header").outerHeight();
    $("body").css("marginTop", heightOfHeader);
  });
});
