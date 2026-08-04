
const matches=[
['Lukyng','DarkHonzaCz'],['Predator','Wbot'],['Zombee','Sajk'],['Silvestr','Mawy'],
['Ze1ro','rndo'],['fiflip','Jangche'],['zeuxi','Niconko'],['Kyokutan','Pleistonax'],
['Mathhew','Nojmisek'],['MajorDTJ','Drtička'],['Siwi','Hungi'],['Adams','Lukyk'],
['Kufrajz','Cieslik'],['Vratous','xDaniCZ'],['Caisem','henny'],['Fleyz','TenSHouslema']
];
const b=document.getElementById('bracket');
matches.forEach((m)=>{
 let a=document.createElement('div');
 a.className='match';
 a.innerHTML='<b>'+m[0]+'</b><br>vs<br><b>'+m[1]+'</b>';
 a.onclick=()=>{document.querySelectorAll('.match').forEach(x=>x.classList.remove('selected'));a.classList.add('selected');};
 let l=document.createElement('div'); l.className='line';
 let r=document.createElement('div'); r.className='match'; r.innerHTML='<i>Vítěz zápasu</i>';
 b.append(a,l,r);
});
