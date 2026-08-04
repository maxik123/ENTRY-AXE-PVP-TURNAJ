const matches=[
["Lukyng","DarkHonzaCz"],
["Predator","Wbot"],
["Zombee","Sajk"],
["Silvestr","Mawy"],
["Ze1ro","rndo"],
["fiflip","Jangche"],
["zeuxi","Niconko"],
["Kyokutan","Pleistonax"],
["Mathhew","Nojmisek"],
["MajorDTJ","Drtička"],
["Siwi","Hungi"],
["Adams","Lukyk"],
["Kufrajz","Cieslik"],
["Vratous","xDaniCZ"],
["Caisem","henny"],
["Fleyz","TenSHouslema"]
];
const el=document.getElementById("bracket");
matches.forEach((m,i)=>{
el.innerHTML+=`<div class="match"><strong>Zápas ${i+1}</strong><br>${m[0]} vs ${m[1]}</div>`;
});
