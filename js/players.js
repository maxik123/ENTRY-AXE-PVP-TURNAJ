const players = [

    // ===== LT1 =====

    {
        name:"_Lukyng",
        rank:"LT1"
    },

    {
        name:"MINER99",
        rank:"LT1"
    },

    {
        name:"kufrajzcz",
        rank:"LT1"
    },


    // ===== HT2 =====

    {
        name:"Ze1ro00",
        rank:"HT2"
    },

    {
        name:"caisem",
        rank:"HT2"
    },
   
    {
        name:"M3gaBoy_",
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
        name:"SievT",
        rank:"LT2"
    },

    {
        name:"ZomBeeX",
        rank:"LT2"
    },

    {
        name:"TenSHouslema",
        rank:"LT2"
    },

    {
        name:"qHenny",
        rank:"LT2"
    },


    // ===== HT3 =====

    {
        name:"adams297",
        rank:"HT3"
    },

    {
        name:"Kyokutan_",
        rank:"HT3"
    },

    {
        name:"fiflip",
        rank:"HT3"
    },

    {
        name:"MajorDTJ",
        rank:"HT3"
    },

    {
        name:"Predator_18",
        rank:"HT3"
    },

    {
        name:"ksd_argys",
        rank:"HT3"
    },

    {
        name:"xDaniCZ",
        rank:"HT3"
    },

    {
        name:"Lukyk656",
        rank:"HT3"
    },


    // ===== LT3 =====

    {
        name:"Drticka",
        rank:"LT3"
    },

    {
        name:"Pleistonax",
        rank:"LT3"
    },

    {
        name:"Jangche",
        rank:"LT3"
    },

    {
        name:"Niconko2",
        rank:"LT3"
    },

    {
        name:"rnd0",
        rank:"LT3"
    },

    {
        name:"Sajk3000",
        rank:"LT3"
    },

    {
        name:"Tomas123456",
        rank:"LT3"
    },

    {
        name:"WBotWarrior7",
        rank:"LT3"
    },

    {
        name:"Hungi_",
        rank:"LT3"
    },

    {
        name:"Nojmisek",
        rank:"LT3"
    },

    {
        name:"Ciesliik",
        rank:"LT3"
    },

    {
        name:"DarkHonzaCz",
        rank:"LT3"
    }

];





const container = document.getElementById("players");





players.forEach((player, index) => {


    container.innerHTML += `

    <div class="player-card">


        <div class="player-number">
            #${index + 1}
        </div>


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
