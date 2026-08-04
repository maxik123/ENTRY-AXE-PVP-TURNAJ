const players = [

    // ===== LT1 =====

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


    // ===== HT2 =====

    {
        name:"Ze1ro",
        rank:"HT2"
    },

    {
        name:"Caisem",
        rank:"HT2"
    },


    // ===== LT2 =====

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
        name:"Zombee",
        rank:"LT2"
    },

    {
        name:"TenSHouslema",
        rank:"LT2"
    },

    {
        name:"henny",
        rank:"LT2"
    },


    // ===== HT3 =====

    {
        name:"Adams",
        rank:"HT3"
    },

    {
        name:"Kyokutan",
        rank:"HT3"
    },

    {
        name:"fiflip",
        rank:"HT3"
    },

    {
        name:"Silvestr",
        rank:"HT3"
    },

    {
        name:"MajorDTJ",
        rank:"HT3"
    },

    {
        name:"Predator",
        rank:"HT3"
    },

    {
        name:"Vratous",
        rank:"HT3"
    },

    {
        name:"xDaniCZ",
        rank:"HT3"
    },

    {
        name:"Lukyk",
        rank:"HT3"
    },


    // ===== LT3 =====

    {
        name:"Drtička",
        rank:"LT3"
    },

    {
        name:"Pleistonax",
        rank:"LT3"
    },

    {
        name:"Mawy",
        rank:"LT3"
    },

    {
        name:"clovek",
        rank:"LT3"
    },

    {
        name:"brambora",
        rank:"LT3"
    },

    {
        name:"itrexiik",
        rank:"LT3"
    },

    {
        name:"Jangche",
        rank:"LT3"
    },

    {
        name:"Niconko",
        rank:"LT3"
    },

    {
        name:"rndo",
        rank:"LT3"
    },

    {
        name:"Sajk",
        rank:"LT3"
    },

    {
        name:"Tomio",
        rank:"LT3"
    },

    {
        name:"Wbot",
        rank:"LT3"
    },

    {
        name:"Hungi",
        rank:"LT3"
    },

    {
        name:"Nojmisek",
        rank:"LT3"
    },

    {
        name:"Cieslik",
        rank:"LT3"
    },

    {
        name:"DarkHonzaCz",
        rank:"LT3"
    }

];





const container = document.getElementById("players");





players.forEach(player => {


    container.innerHTML += `

    <div class="player-card">


        <img 
        src="https://mc-heads.net/avatar/${player.name}"
        alt="${player.name}">


        <h3>
        ${player.name}
        </h3>


        <span class="rank ${player.rank}">
        ${player.rank}
        </span>


    </div>

    `;


});
