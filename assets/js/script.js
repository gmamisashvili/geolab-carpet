$(function() {
  let heightOfHeader = $(".header").outerHeight();
  $("body").css("marginTop", heightOfHeader);

  $(window).on("resize", function() {
    let heightOfHeader = $(".header").outerHeight();
    $("body").css("marginTop", heightOfHeader);
  });

  let inputs= [$('.name-input'), $('.email-input'), $('.satauri-input'), $('.textarea-input')];
  let errors= ['ჩაწერეთ სახელი', 'ჩაწერეთ მეილი', 'ჩაწერეთ სათაური', 'ჩაწერეთ ტექსტი'];

  $('.submit-btn').on('click',function(e){
  for (i=0;i<inputs.length;i++){
    if (inputs[i].val()==""){
      inputs[i].attr('placeholder',errors[i]);
      inputs[i].css('border-color','red');
      e.preventDefault();
    }
    else{
      inputs[i].css('border-color','black');
    }
  }})
});
