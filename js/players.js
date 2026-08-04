document.addEventListener("DOMContentLoaded", () => {


const players = [


{
name:"Lukyng",
rank:"LT1"
},

{
name:"Mathhew",
rank:"LT1"
},

{
name:"Kufrajz",
rank:"LT1"
},


{
name:"Ze1ro",
rank:"HT2"
},

{
name:"Caisem",
rank:"HT2"
},


{
name:"zeuxi",
rank:"LT2"
},

{
name:"Fleyz",
rank:"LT2"
},

{
name:"Siwi",
rank:"LT2"
},


{
name:"Predator",
rank:"HT3"
},

{
name:"Silvestr",
rank:"HT3"
},


{
name:"DarkHonzaCz",
rank:"LT3"
},

{
name:"Wbot",
rank:"LT3"
}


];



const container = document.getElementById("players");


if(!container){

console.error("Chybí #players v HTML");

return;

}



players.forEach(player => {


container.innerHTML += `


<div class="player-card">


<img src="https://mc-heads.net/avatar/${player.name}">


<div>

<h3>${player.name}</h3>


<span class="rank ${player.rank}">
${player.rank}
</span>


</div>


</div>


`;


});


});
