// ============================================================
// ENTRYHO AXEPVP - PAVOUK TURNAJE
// ============================================================
//
// 20:0 -> vyhrává hráč 1
// 0:20 -> vyhrává hráč 2
// null -> zápas ještě není odehraný
//
// Jsou zde 2 samostatné skupiny:
//
// SKUPINA 1
// 4 zápasy -> semifinále -> finále
//
// SKUPINA 2
// 4 zápasy -> semifinále -> finále
//
// ============================================================



// ============================================================
// ODKAZY NA ZÁZNAMY
// ============================================================

const MAJNR =
    "https://www.youtube.com/live/rxXHjXghW0M?si=fxL59SZGBRPW2JN1";

const KYOKUTAN =
    "https://www.youtube.com/live/irE1Mar6jAw?si=-OTr4eEhJAhhUYCI";

const ZELVAA =
    "https://www.youtube.com/live/HJc7dUnEEKo?si=jNPM6_yvvtZWzqhe";

const YOUTUBE =
    "https://www.youtube.com/@Entry14";



// ============================================================
// SKUPINA 1
// ============================================================

const GROUP1 = [

    {
        player1: "MINER99",
        player2: "Hungi_",

        score1: 20,
        score2: 5,

        record: MAJNR
    },


    {
        player1: "Kyokutan_",
        player2: "Sajk3000",

        score1: 20,
        score2: 15,

        record: KYOKUTAN
    },


    {
        player1: "xDaniCz",
        player2: "Drticka",

        score1: null,
        score2: null,

        record: YOUTUBE
    },


    {
        player1: "Zelvaa",
        player2: "Nojmisek",

        score1: 20,
        score2: 2,

        record: ZELVAA
    }

];



// ============================================================
// SKUPINA 2
// ============================================================
//
// TADY SI DOSADÍŠ HRÁČE SKUPINY 2
//
// ============================================================

const GROUP2 = [

    {
        player1: "kufrajzcz",
        player2: "Tomas123456",

        score1: null,
        score2: null,

        record: YOUTUBE
    },


    {
        player1: "ksd_argys",
        player2: "Pleistonax",

        score1: null,
        score2: null,

        record: YOUTUBE
    },


    {
        player1: "TenSHouslema",
        player2: "Lukyk656",

        score1: null,
        score2: null,

        record: YOUTUBE
    },


    {
        player1: "Predator_18",
        player2: "Ciesliik",

        score1: null,
        score2: null,

        record: YOUTUBE
    }

];



// ============================================================
// DATA PRO 2. KOLO - SKUPINA 1
// ============================================================
//
// Po skončení prvního kola se hráči automaticky doplní.
//
// ============================================================

const GROUP1_ROUND2 = [

    {
        score1: 20,
        score2: 10,

        record: YOUTUBE
    },


    {
        score1: null,
        score2: null,

        record: YOUTUBE
    }

];



// ============================================================
// DATA PRO 2. KOLO - SKUPINA 2
// ============================================================

const GROUP2_ROUND2 = [

    {
        score1: null,
        score2: null,

        record: YOUTUBE
    },


    {
        score1: null,
        score2: null,

        record: YOUTUBE
    }

];



// ============================================================
// FINÁLE SKUPINY 1
// ============================================================

const GROUP1_FINAL = {

    score1: null,
    score2: null,

    record: YOUTUBE

};



// ============================================================
// FINÁLE SKUPINY 2
// ============================================================

const GROUP2_FINAL = {

    score1: null,
    score2: null,

    record: YOUTUBE

};



// ============================================================
// AVATAR
// ============================================================

function avatar(name) {

    if (!name) {

        return "";

    }


    return (
        "https://mc-heads.net/avatar/" +
        encodeURIComponent(name) +
        "/64"
    );

}



// ============================================================
// VÍTĚZ ZÁPASU
// ============================================================

function winner(match) {

    if (!match) {

        return null;

    }


    if (!match.player1 || !match.player2) {

        return null;

    }


    if (
        match.score1 === null ||
        match.score2 === null
    ) {

        return null;

    }


    if (
        match.score1 === 20 &&
        match.score2 < 20
    ) {

        return match.player1;

    }


    if (
        match.score2 === 20 &&
        match.score1 < 20
    ) {

        return match.player2;

    }


    return null;

}



// ============================================================
// ŘÁDEK HRÁČE
// ============================================================

function playerRow(name, score) {

    if (!name) {

        return `

            <div class="player waiting">

                <div class="head empty">
                    ?
                </div>

                <span>
                    ČEKÁME
                </span>

                <strong>
                    —
                </strong>

            </div>

        `;

    }


    return `

        <div class="player">

            <img
                class="head"
                src="${avatar(name)}"
                onerror="this.src='https://mc-heads.net/avatar/Steve/64'"
                alt=""
            >

            <span>
                ${name}
            </span>

            <strong>
                ${score === null ? "—" : score}
            </strong>

        </div>

    `;

}



// ============================================================
// BOX ZÁPASU
// ============================================================

function matchBox(match, label) {

    const w = winner(match);


    return `

        <div class="match-wrap">


            ${
                label
                ? `
                    <div class="match-label">
                        ${label}
                    </div>
                `
                : ""
            }


            <div
                class="match ${w ? "won" : ""}"
            >


                ${playerRow(
                    match.player1,
                    match.score1
                )}


                ${playerRow(
                    match.player2,
                    match.score2
                )}



                <a
                    class="record"
                    href="${match.record || YOUTUBE}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    ▶ SLEDOVAT ZÁZNAM

                </a>



                <div class="match-status">

                    ${
                        w
                        ? `${w} POSTUPUJE`
                        : (
                            match.player1 &&
                            match.player2
                            ? "ČEKÁME NA VÝSLEDEK"
                            : "ČEKÁME NA HRÁČE"
                        )
                    }

                </div>


            </div>


        </div>

    `;

}



// ============================================================
// VYTVOŘENÍ DALŠÍHO ZÁPASU
// ============================================================

function nextMatch(
    player1,
    player2,
    data
) {

    return {

        player1: player1,

        player2: player2,

        score1: data.score1,

        score2: data.score2,

        record: data.record

    };

}



// ============================================================
// VYKRESLENÍ JEDNÉ SKUPINY
// ============================================================

function renderGroup(
    containerId,
    matches,
    round2Data,
    finalData,
    groupName
) {


    const container =
        document.getElementById(containerId);


    if (!container) {

        console.error(
            `Element #${containerId} nebyl nalezen.`
        );

        return;

    }



    // ========================================================
    // VÍTĚZOVÉ 1. KOLA
    // ========================================================

    const w1 = winner(matches[0]);

    const w2 = winner(matches[1]);

    const w3 = winner(matches[2]);

    const w4 = winner(matches[3]);



    // ========================================================
    // 2. KOLO
    // ========================================================

    const r2a = nextMatch(
        w1,
        w2,
        round2Data[0]
    );


    const r2b = nextMatch(
        w3,
        w4,
        round2Data[1]
    );



    // ========================================================
    // VÍTĚZOVÉ 2. KOLA
    // ========================================================

    const w5 = winner(r2a);

    const w6 = winner(r2b);



    // ========================================================
    // FINÁLE
    // ========================================================

    const final = nextMatch(
        w5,
        w6,
        finalData
    );



    // ========================================================
    // VÍTĚZ SKUPINY
    // ========================================================

    const champion =
        winner(final);



    // ========================================================
    // HTML
    // ========================================================

    container.innerHTML = `


        <section class="bracket">


            <!-- ========================================== -->
            <!-- 1. KOLO -->
            <!-- ========================================== -->

            <div class="round round1">


                <div class="round-title">
                    1. KOLO
                </div>


                ${matchBox(
                    matches[0],
                    "ZÁPAS 1"
                )}


                ${matchBox(
                    matches[1],
                    "ZÁPAS 2"
                )}


                ${matchBox(
                    matches[2],
                    "ZÁPAS 3"
                )}


                ${matchBox(
                    matches[3],
                    "ZÁPAS 4"
                )}


            </div>



            <!-- ========================================== -->
            <!-- 2. KOLO -->
            <!-- ========================================== -->

            <div class="round round2">


                <div class="round-title">
                    SEMIFINÁLE
                </div>


                ${matchBox(
                    r2a,
                    "SEMIFINÁLE 1"
                )}


                ${matchBox(
                    r2b,
                    "SEMIFINÁLE 2"
                )}


            </div>



            <!-- ========================================== -->
            <!-- FINÁLE -->
            <!-- ========================================== -->

            <div class="round final-round">


                <div class="round-title">
                    FINÁLE
                </div>


                ${matchBox(
                    final,
                    "FINÁLE"
                )}



                <!-- ====================================== -->
                <!-- VÍTĚZ SKUPINY -->
                <!-- ====================================== -->

                <div
                    class="
                        champion
                        ${champion ? "active" : ""}
                    "
                >


                    <small>
                        ${groupName}
                    </small>


                    <div>


                        ${
                            champion

                            ? `

                                <img
                                    src="${avatar(champion)}"
                                    alt=""
                                >

                                <strong>
                                    🏆 ${champion}
                                </strong>

                            `

                            : `

                                <strong>
                                    ČEKÁME NA VÍTĚZE
                                </strong>

                            `
                        }


                    </div>


                </div>


            </div>


        </section>


    `;

}



// ============================================================
// VYKRESLENÍ
// ============================================================

function render() {


    // ========================================================
    // SKUPINA 1
    // ========================================================

    renderGroup(

        "bracket-group1",

        GROUP1,

        GROUP1_ROUND2,

        GROUP1_FINAL,

        "VÍTĚZ SKUPINY 1"

    );



    // ========================================================
    // SKUPINA 2
    // ========================================================

    renderGroup(

        "bracket-group2",

        GROUP2,

        GROUP2_ROUND2,

        GROUP2_FINAL,

        "VÍTĚZ SKUPINY 2"

    );

}



// ============================================================
// START
// ============================================================

render();
