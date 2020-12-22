window.onscroll = function(){
   var bg_win = document.documentElement.scrollTop || document.body.scrollTop
  // console.log(bg_win);
  if(bg_win>0){
    let down_arrow = document.getElementsByClassName("down_arrow")[0].classList.add("on");
    // let banner_bg =document.getElementsByClassName("banner_bg")[0].style.height="650px";
  }else{
    let down_arrow= document.getElementsByClassName("down_arrow")[0].classList.remove("on");

 };
};
