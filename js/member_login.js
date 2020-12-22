$(function(){
  $("a.tab").on("click", function(e){
    e.preventDefault();


    $(this).closest("ul").find("a.tab").removeClass("-on");
    $(this).addClass("-on");


    $("div.tab").removeClass("-on");
    $("div.tab." + $(this).attr("data-target")).addClass("-on");
  });
});

$(function(){
  $('.description_a').css('opacity',1);
  $('.description_a').mouseover(function(){
    $(this).fadeTo(50,0.5);
    $('.description_a').not(this).fadeTo(50,1)
  });
});
