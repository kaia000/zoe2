const logo = document.querySelectorAll('#logo path');

for(let i = 0; i<logo.length; i++){
    console.log('Letter ${i} is $(logo[i].getTotalLength()})');
}
//위에 있는것도 작동 안됨...

// 이건 다른 사람 코드, 작동 안됨
//var  logo = document.querySelectorAll("#logo path");
//logo.forEach(function(i){
//  console.log(i);
//  i.style.strokeDasharray = i.getTotalLength()+"px";
//  i.style.strokeDashoffset = i.getTotalLength()+"px";
//  i.style.animation = "anim 2s ease forwards";
//});