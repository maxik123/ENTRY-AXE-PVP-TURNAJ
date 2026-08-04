const players=[
{name:"Lukyng",tier:"LT1",points:2500},
{name:"Mathhew",tier:"LT1",points:2475},
{name:"Kufrajz",tier:"LT1",points:2450},
{name:"Ze1ro",tier:"HT2",points:2300},
{name:"Caisem",tier:"HT2",points:2270}
];
const body=document.querySelector("tbody");
function render(list){
body.innerHTML="";
list.sort((a,b)=>b.points-a.points).forEach(p=>{
body.innerHTML+=`<tr><td>${p.name}</td><td>${p.tier}</td><td>${p.points}</td></tr>`;
});
}
render(players);
document.getElementById("search").oninput=e=>{
const q=e.target.value.toLowerCase();
render(players.filter(x=>x.name.toLowerCase().includes(q)));
};
