let userName = prompt("Введіть ім'я");
if (userName != null && userName != "") {
   document.getElementById("UserName").innerText = userName;
}

var emodji=["😁", "😎", "😜", "😊","😨"];
var counter =0;

var check = document.getElementById("handle")

check.addEventListener("click", function(){

var i1 =  emodji[Math.floor(Math.random()*emodji.length)];
item1.innerHTML =i1;  
 
var i2= emodji[Math.floor(Math.random()*emodji.length)];
item2.innerHTML = i2;

var i3 = emodji[Math.floor(Math.random()*emodji.length)];   
item3.innerHTML =i3;

var i4 =  emodji[Math.floor(Math.random()*emodji.length)];
item4.innerHTML =i4;  
 
var i5= emodji[Math.floor(Math.random()*emodji.length)];
item5.innerHTML = i5;

var i6 = emodji[Math.floor(Math.random()*emodji.length)];   
item6.innerHTML =i6;

var i7 =  emodji[Math.floor(Math.random()*emodji.length)];
item7.innerHTML =i7;  
 
var i8 = emodji[Math.floor(Math.random()*emodji.length)];
item8.innerHTML = i8;

var i9 = emodji[Math.floor(Math.random()*emodji.length)];   
item9.innerHTML =i9;

var txt;

if(i1 === i2 && i2 === i3 && i3 === i1){
 txt = "Congratulation, you won!!"
   }else{
 txt = "Sorry, but you lose("
   
  document.getElementById("notice").innerHTML = txt;

  if(i4 === i5 && i5 === i6 && i6 === i4){
txt = "Congratulation, you won!!"
   }else{
 txt = "Sorry, but you lose("
   
  document.getElementById("notice").innerHTML = txt;

  if(i7 === i8 && i8 === i9 && i9 === i7){
 txt = "Congratulation, you won!!"
   }else{
 txt = "Sorry, but you lose("
   }
}
}

  document.getElementById("notice").innerHTML = txt;
counter++;
			if(counter==3){
				document.getElementById("UserName").innerText=(" Want try again?");
			}
			if	(counter==4){location.reload()}

})
