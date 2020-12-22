var submit_btn1=document.getElementById("submit_btn1");
submit_btn1.addEventListener("click",function(e){
   let messag_value=document.getElementById("messag");
   let str = '<li class="messag_li">'+messag_value.value+'<button type="button" class="delete_but1">刪除</button></li>';
   let messag_block=document.getElementById("messag_block")
   if(messag_value.value!=""){
      messag_block.insertAdjacentHTML("afterbegin",str);
      messag_value.value="";
      e.preventDefault();
   }
});

document.addEventListener("click",function(e){
  if(e.target.classList.contains("delete_but1")){
     e.target.closest("li").remove();
  }
});
