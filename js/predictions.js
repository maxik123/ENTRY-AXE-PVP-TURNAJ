// =======================================
//        AXE PREDICTIONS SYSTEM
// =======================================


const matches = [


    {
        id:"miner99-rnd0",
        player1:"MINER99",
        player2:"rnd0"
    },


    {
        id:"kyokutan-sajk",
        player1:"Kyokutan_",
        player2:"Sajk3000"
    },


    {
        id:"xdanicz-jangche",
        player1:"xDaniCz",
        player2:"Jangche"
    }


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



        let votes =
        JSON.parse(
            localStorage.getItem(match.id)
        )
        ||
        {

            [match.player1]:0,

            [match.player2]:0

        };




        let total =
        votes[match.player1]
        +
        votes[match.player2];





        let player1Percent =
        total > 0
        ?
        Math.round(
            votes[match.player1] / total * 100
        )
        :
        0;





        let player2Percent =
        total > 0
        ?
        100-player1Percent
        :
        0;







        container.innerHTML += `



        <div class="prediction-card">



            <h3>

            ${match.player1}

            ⚔️

            ${match.player2}

            </h3>






            <div class="prediction-buttons">



                <button onclick="vote('${match.id}','${match.player1}')">

                ${match.player1}

                </button>





                <button onclick="vote('${match.id}','${match.player2}')">

                ${match.player2}

                </button>



            </div>








            <div class="prediction-bar">



                <div class="prediction-bar-left"

                style="width:${player1Percent}%">

                ${player1Percent}%

                </div>



            </div>







            <p class="prediction-result">

            ${match.player1}: ${player1Percent}%


            <br>


            ${match.player2}: ${player2Percent}%


            <br><br>


             ${total} hlasů


            </p>





        </div>



        `;



    });



}









// =======================================
//              VOTE
// =======================================


function vote(id,player){



    let alreadyVoted =
    localStorage.getItem(
        "voted_" + id
    );



    if(alreadyVoted){


        alert(
        "Už jsi hlasoval v tomto zápase!"
        );


        return;

    }





    let votes =
    JSON.parse(
        localStorage.getItem(id)
    )
    ||
    {};





    votes[player] =
    (votes[player] || 0) + 1;





    localStorage.setItem(

        id,

        JSON.stringify(votes)

    );





    localStorage.setItem(

        "voted_" + id,

        true

    );





    loadPredictions();



}







// =======================================
//              START
// =======================================


loadPredictions();