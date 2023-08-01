setInterval(()=>{


let hora=document.querySelector("#hora");
let minuto=document.querySelector("#minuto");
let segundo=document.querySelector("#segundo");

let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();

let hh=document.getElementById('hh')
let mm=document.getElementById('mm');
let ss=document.getElementById('ss');

let hora_dot=document.querySelector('.hora_dot');
let min_dot=document.querySelector('.min_dot');
let seg_dot=document.querySelector('.seg_dot');

//zero a esquerda

h=(h<10)? "0" + h:h;

m=(m<10)? "0" + m:m;

s=(s<10)? "0" + s:s;


hora.innerHTML=h + "<br><span>Hora</span>";
minuto.innerHTML=m + "<br><span>Minuto(s)</span>";
segundo.innerHTML=s + "<br><span>Segundo(s)</span>";

hh.style.strokeDashoffset=440 - (440 * h) / 24;
mm.style.strokeDashoffset=440 - (440 * m) / 60;
ss.style.strokeDashoffset=440 - (440 * s) / 60;

hora_dot.style.transform = `rotate(${h * 15 }deg)`;
min_dot.style.transform = `rotate(${m * 6}deg)`;
seg_dot.style.transform = `rotate(${s * 6}deg)`;

})