// PASSWORD

function checkPassword(){

const password=document.getElementById("password").value;

if(password==="London2024"){

document.getElementById("loginPage").style.display="none";

document.getElementById("mainWebsite").style.display="block";

showLetter();

startHearts();

}else{

document.getElementById("error").innerHTML="Wrong Password ❤️";

}

}

// SHOW LETTER

function showLetter(){

hideAll();

document.getElementById("letter").style.display="block";

window.scrollTo({top:0,behavior:"smooth"});

}

// SHOW STORY

function showStory(){

hideAll();

document.getElementById("story").style.display="block";

window.scrollTo({top:0,behavior:"smooth"});

}

// SHOW REASONS

function showReasons(){

hideAll();

document.getElementById("reasons").style.display="block";

window.scrollTo({top:0,behavior:"smooth"});

}

// HIDE

function hideAll(){

document.getElementById("letter").style.display="none";

document.getElementById("story").style.display="none";

document.getElementById("reasons").style.display="none";

document.getElementById("ending").style.display="none";

}

// 100 REASONS

const reasons=[

"Because you make me smile ❤️",
"Because meeting you in London changed my life.",
"Because you believe in me.",
"Because you make distance feel smaller.",
"Because you understand me.",
"Because you always support me.",
"Because you are my safe place.",
"Because your smile is my favorite.",
"Because you are kind.",
"Because I miss you every day."

];

// Fill to 100

while(reasons.length<100){

reasons.push("Because every new day gives me another reason to love you. ❤️");

}

let current=0;

function nextReason(){

document.getElementById("reasonText").innerHTML=reasons[current];

current++;

if(current>=100){

document.getElementById("reasonText").innerHTML="❤️ You are my forever. Thank you for being you. ❤️";

document.getElementById("ending").style.display="block";

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

current=0;

}

}

// FLOATING HEARTS

function startHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.pointerEvents="none";

heart.style.animation="floatUp 7s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

},350);

}

// HEART ANIMATION

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatUp{

0%{

transform:translateY(0);

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

`;

document.head.appendChild(style);
