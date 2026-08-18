// =======================================
//        FIREBASE AXE PREDICTIONS
// =======================================


import { 
    doc,
    getDoc,
    setDoc,
    onSnapshot
} 
from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";




// =======================================
//        ZÁPASY
// =======================================


const matches = [
      
    
    {
        id:"drown-troxx",
        player1:"Troxicekk",
        player2:"DroWnerT",date:"19. 8. 2026",time:"15:00",stream:"https://youtube.com/live/x6tBr9b1HL0?feature=share"
    }, 
    {
        id:"kufr-argys",
        player1:"kufrajzcz",
        player2:"ksd_argys",date:"19. 8. 2026",time:"17:00",stream:"https://www.youtube.com/live/IYkXhaommiM?si=uE1tl8lRt1NaXptr"
    }, 
    {
        id:"flezy-jirka",
        player1:"Fleyz",
        player2:"Jirkoslav_CZ",date:"19. 8. 2026",time:"19:00",stream:"https://www.youtube.com/live/WLDcEYvD1jE?si=fqR8ivZXHr3HZ-eT"
    },
     {
        id:"xdani-zelva",
        player1:"Zelvaa",
        player2:"xDaniCz",date:"20. 8. 2026",time:"14:00",stream:"https://youtube.com/live/g5JtpEbwa8E?feature=share"
    },
    {
        id:"housle-lukyk",
        player1:"TenSHouslema",
        player2:"Lukyk656",date:"20. 8. 2026",time:"18:00",stream:"https://youtube.com/live/g5JtpEbwa8E?feature=share"
    },
    
];




// =======================================
//        LOAD PREDICTIONS
// =======================================


function loadPredictions(){


const container =
document.getElementById("predictions");


if(!container) return;



container.innerHTML="";



matches.forEach(match=>{


const ref =
doc(
    window.db,
    "predictions",
    match.id
);



onSnapshot(ref,(snapshot)=>{


let data =
snapshot.exists()
?
snapshot.data()
:
{
    [match.player1]:0,
    [match.player2]:0
};




let p1 =
Number(data[match.player1] || 0);


let p2 =
Number(data[match.player2] || 0);



let total =
p1+p2;



let percent =
total > 0
?
Math.round(
p1 / total * 100
)
:
0;



let percent2 =
100-percent;





let old =
document.getElementById(
match.id
);



let html = `


<div class="prediction-card"
id="${match.id}">


<h3>

${match.player1}

VS

${match.player2}

</h3>




<div class="prediction-buttons">

    <div class="player-side">

        <img
            class="player-head"
            src="https://mc-heads.net/avatar/${match.player1}/64"
            alt="${match.player1}"
        >

        <button onclick="vote('${match.id}','${match.player1}')">
            ${match.player1}
        </button>

    </div>

    <div class="player-side">

        <button onclick="vote('${match.id}','${match.player2}')">
            ${match.player2}
        </button>

        <img
            class="player-head"
            src="https://mc-heads.net/avatar/${match.player2}/64"
            alt="${match.player2}"
        >

    </div>

</div>





<div class="prediction-bar">


<div class="prediction-bar-left"

style="width:${percent}%">


</div>


</div>
<div class="prediction-footer"><span> ${match.date} • ${match.time}</span><a class="watch-live" href="${match.stream}" target="_blank">▶ Sledovat živě</a></div>
<p class="prediction-result">

${match.player1}: ${percent}%


<br>


${match.player2}: ${percent2}%


<br><br>


 ${total} hlasů


</p>


</div>


`;





if(old){

old.outerHTML = html;

}
else{

container.innerHTML += html;

}



});



});


}









// =======================================
//              HLASOVÁNÍ
// =======================================


window.vote = async function(id,player){



let voted =
localStorage.getItem(
"voted_"+id
);



if(voted){


alert(
"Už jsi hlasoval v tomto zápase!"
);


return;

}




let match =
matches.find(
m=>m.id===id
);



let ref =
doc(
window.db,
"predictions",
id
);



let snap =
await getDoc(ref);



let data =
snap.exists()
?
snap.data()
:
{};



data[match.player1] =
Number(data[match.player1] || 0);



data[match.player2] =
Number(data[match.player2] || 0);




data[player]++;




await setDoc(
ref,
data
);





localStorage.setItem(
"voted_"+id,
"true"
);



};







// =======================================
//              START
// =======================================


loadPredictions();
