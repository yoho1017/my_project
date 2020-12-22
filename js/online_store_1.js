var list = document.getElementsByClassName("commodity_block_img1");
for(let i=0; i< list.length;i++){
  
  list[i].addEventListener("click",function(e){
    //alert(e.target.src);
    document.getElementById("test_img").src = e.target.src;
  });
}
