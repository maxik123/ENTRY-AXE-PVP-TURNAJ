
// ============================================================
// ENTRYHO AXEPVP — DOUBLE ELIMINATION
// ============================================================
// DOUBLE ELIMINATION:
//
// WINNERS BRACKET
//
// ZÁPAS 1 ─┐
//           ├─ SEMIFINÁLE 1 ─┐
// ZÁPAS 2 ─┘                 │
//                             ├─ FINÁLE WINNERS ─┐
// ZÁPAS 3 ─┐                 │                  │
//           ├─ SEMIFINÁLE 2 ─┘                  │
// ZÁPAS 4 ─┘                                    │
//                                                │
// LOSERS BRACKET                                 │
//                                                │
// LB 1 ─┐                                        │
//       ├─ LB 3 ─┐                               │
// LB 2 ─┘        │                               │
//                ├─ LB MEZIFINÁLE ─┐             │
// LB 3 ─┐        │                 │             │
//       ├─ LB 4 ─┘                 │             │
// LB 4 ─┘                          │             │
//                                  ├─ GRAND FINÁLE
//                                  │
// FINÁLE WINNERS ──────────────────┘
//
// ============================================================


// ============================================================
// STREAMS
// ============================================================

const STREAMS = {
    entry: "https://www.youtube.com/@Entry14"
};


// ============================================================
// SKUPINA 1 — WINNERS BRACKET
// ============================================================

const GROUP1 = [
    {
        player1: "MINER99",
        player2: "Hungi_",
        score1: 20,
        score2: 5,
        streams: ["https://www.youtube.com/live/rxXHjXghW0M"]
    },
    {
        player1: "Kyokutan_",
        player2: "Sajk3000",
        score1: 20,
        score2: 15,
        streams: ["https://www.youtube.com/live/irE1Mar6jAw"]
    },
    {
        player1: "xDaniCz",
        player2: "WBotWarrior7",
        score1: 20,
        score2: 9,
        streams: []
    },
    {
        player1: "Zelvaa",
        player2: "Nojmisek",
        score1: 20,
        score2: 2,
        streams: ["https://www.youtube.com/live/HJc7dUnEEKo"]
    }
];

const GROUP1_WB_R2 = [
    {
        score1: 20,
        score2: 10,
        streams: []
    },
    {
        score1: 19,
        score2: 20,
        streams: []
    }
];

const GROUP1_WB_FINAL = {
    score1: 20,
    score2: 2,
    streams: []
};


// ============================================================
// SKUPINA 1 — LOSERS BRACKET
// ============================================================
//
// LB ZÁPAS 1:
// poražený ZÁPASU 1 vs poražený ZÁPASU 2
//
// LB ZÁPAS 2:
// poražený ZÁPASU 3 vs poražený ZÁPASU 4
//
// LB ZÁPAS 3:
// vítěz LB 1 vs poražený SEMIFINÁLE 1
//
// LB ZÁPAS 4:
// vítěz LB 2 vs poražený SEMIFINÁLE 2
//
// LB MEZIFINÁLE:
// vítěz LB 3 vs vítěz LB 4
//
// LB FINÁLE:
// vítěz LB MEZIFINÁLE vs poražený FINÁLE WINNERS
//
// GRAND FINÁLE:
// vítěz FINÁLE WINNERS vs vítěz LB FINÁLE
//
// ============================================================

const GROUP1_LB_R1 = [
    {
        score1: 7,
        score2: 20,
        streams: []
    },
    {
        score1: 20,
        score2: 14,
        streams: []
    }
];

const GROUP1_LB_R2 = [
    {
        score1: null,
        score2: null,
        streams: []
    },
    {
        score1: null,
        score2: null,
        streams: []
    }
];

// NOVÝ MEZIKROK
const GROUP1_LB_MID_FINAL = {
    score1: null,
    score2: null,
    streams: []
};

// LB FINÁLE
// Vítěz LB mezifinále vs poražený WB finále
const GROUP1_LB_FINAL = {
    score1: 19,
    score2: 20,
    streams: []
};

const GROUP1_GRAND_FINAL = {
    score1: null,
    score2: null,
    streams: []
};


// ============================================================
// SKUPINA 2 — WINNERS BRACKET
// ============================================================

const GROUP2 = [
    {
        player1: "kufrajzcz",
        player2: "Tomas123456",
        score1: 20,
        score2: 0,
        streams: []
    },
    {
        player1: "ksd_argys",
        player2: "Drticka",
        score1: 20,
        score2: 9,
        streams: []
    },
    {
        player1: "TenSHouslema",
        player2: "Lukyk656",
        score1: 20,
        score2: 9,
        streams: []
    },
    {
        player1: "Predator_18",
        player2: "Ciesliik",
        score1: 12,
        score2: 20,
        streams: []
    }
];

const GROUP2_WB_R2 = [
    {
        score1: 20,
        score2: 2,
        streams: []
    },
    {
        score1: 20,
        score2: 15,
        streams: []
    }
];

const GROUP2_WB_FINAL = {
    score1: null,
    score2: null,
    streams: []
};


// ============================================================
// SKUPINA 2 — LOSERS BRACKET
// ============================================================

const GROUP2_LB_R1 = [
    {
        score1: 17,
        score2: 20,
        streams: []
    },
    {
        score1: 0,
        score2: 20,
        streams: []
    }
];

const GROUP2_LB_R2 = [
    {
        score1: null,
        score2: null,
        streams: []
    },
    {
        score1: null,
        score2: null,
        streams: []
    }
];

// NOVÝ MEZIKROK
const GROUP2_LB_MID_FINAL = {
    score1: null,
    score2: null,
    streams: []
};

// LB FINÁLE
const GROUP2_LB_FINAL = {
    score1: null,
    score2: null,
    streams: []
};

const GROUP2_GRAND_FINAL = {
    score1: null,
    score2: null,
    streams: []
};


// ============================================================
// SKUPINA 3 — WINNERS BRACKET
// ============================================================

const GROUP3 = [
    {
        player1: "_Lukyng",
        player2: "MajorDTJ",
        score1: null,
        score2: null,
        streams: []
    },
    {
        player1: "Zelro00",
        player2: "xmartyz",
        score1: null,
        score2: null,
        streams: []
    },
    {
        player1: "Fleyz",
        player2: "Jirkoslav_CZ",
        score1: 20,
        score2: 6,
        streams: []
    },
    {
        player1: "CatboySilvestr__",
        player2: "_Patrik420__",
        score1: 20,
        score2: 0,
        streams: []
    }
];

const GROUP3_WB_R2 = [
    {
        score1: null,
        score2: null,
        streams: []
    },
    {
        score1: 19,
        score2: 20,
        streams: []
    }
];

const GROUP3_WB_FINAL = {
    score1: null,
    score2: null,
    streams: []
};


// ============================================================
// SKUPINA 3 — LOSERS BRACKET
// ============================================================

const GROUP3_LB_R1 = [
    {
        score1: null,
        score2: null,
        streams: []
    },
    {
        score1: null,
        score2: null,
        streams: []
    }
];

const GROUP3_LB_R2 = [
    {
        score1: null,
        score2: null,
        streams: []
    },
    {
        score1: null,
        score2: null,
        streams: []
    }
];

// NOVÝ MEZIKROK
const GROUP3_LB_MID_FINAL = {
    score1: null,
    score2: null,
    streams: []
};

// LB FINÁLE
const GROUP3_LB_FINAL = {
    score1: null,
    score2: null,
    streams: []
};

const GROUP3_GRAND_FINAL = {
    score1: null,
    score2: null,
    streams: []
};


// ============================================================
// SKUPINA 4 — WINNERS BRACKET
// ============================================================

const GROUP4 = [
    {
        player1: "Troxicekk",
        player2: "DroWnerT",
        score1: 20,
        score2: 7,
        streams: []
    },
    {
        player1: "Caisem",
        player2: "Alpha_R3turns",
        score1: 20,
        score2: 11,
        streams: []
    },
    {
        player1: "Zeuxi",
        player2: "Lionn_123",
        score1: 20,
        score2: 12,
        streams: []
    },
    {
        player1: "qHenny",
        player2: "Adrison99",
        score1: 20,
        score2: 14,
        streams: []
    }
];

const GROUP4_WB_R2 = [
    {
        score1: 20,
        score2: 7,
        streams: []
    },
    {
        score1: null,
        score2: null,
        streams: []
    }
];

const GROUP4_WB_FINAL = {
    score1: null,
    score2: null,
    streams: []
};


// ============================================================
// SKUPINA 4 — LOSERS BRACKET
// ============================================================

const GROUP4_LB_R1 = [
    {
        score1: null,
        score2: null,
        streams: []
    },
    {
        score1: null,
        score2: null,
        streams: []
    }
];

const GROUP4_LB_R2 = [
    {
        score1: null,
        score2: null,
        streams: []
    },
    {
        score1: null,
        score2: null,
        streams: []
    }
];

// NOVÝ MEZIKROK
const GROUP4_LB_MID_FINAL = {
    score1: null,
    score2: null,
    streams: []
};

// LB FINÁLE
const GROUP4_LB_FINAL = {
    score1: null,
    score2: null,
    streams: []
};

const GROUP4_GRAND_FINAL = {
    score1: null,
    score2: null,
    streams: []
};


// ============================================================
// HELPERS
// ============================================================

function avatar(name) {
    if (!name) return "";

    return (
        "https://mc-heads.net/avatar/" +
        encodeURIComponent(name) +
        "/64"
    );
}


// ============================================================
// URČENÍ VÍTĚZE
// ============================================================

function winner(match) {

    if (!match) return null;

    if (!match.player1 || !match.player2) {
        return null;
    }

    if (
        match.score1 === null ||
        match.score2 === null ||
        match.score1 === undefined ||
        match.score2 === undefined
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
// URČENÍ PORAŽENÉHO
// ============================================================

function loser(match) {

    const w = winner(match);

    if (!w || !match) {
        return null;
    }

    return w === match.player1
        ? match.player2
        : match.player1;
}


// ============================================================
// PLAYER ROW
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
                ${score === null || score === undefined ? "—" : score}
            </strong>

        </div>
    `;
}


// ============================================================
// STREAM BUTTONS
// ============================================================

function streamButtons(match) {

    const streams = Array.isArray(match?.streams)
        ? match.streams.filter(Boolean)
        : [];

    if (!streams.length) {
        return "";
    }

    if (streams.length === 1) {

        return `
            <a
                class="record"
                href="${streams[0]}"
                target="_blank"
                rel="noopener noreferrer"
            >
                ▶ SLEDOVAT STREAM
            </a>
        `;
    }

    return `
        <div class="stream-list">

            ${streams.map((url, i) => `

                <a
                    class="record"
                    href="${url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ▶ SLEDOVAT STREAM ${i + 1}
                </a>

            `).join("")}

        </div>
    `;
}


// ============================================================
// MATCH BOX
// ============================================================

function matchBox(match, label, extraClass = "") {

    const w = winner(match);

    return `
        <div class="match-wrap">

            ${
                label
                    ? `<div class="match-label">${label}</div>`
                    : ""
            }

            <div class="match ${w ? "won" : ""} ${extraClass}">

                ${playerRow(
                    match?.player1,
                    match?.score1 ?? null
                )}

                ${playerRow(
                    match?.player2,
                    match?.score2 ?? null
                )}

                ${streamButtons(match || {})}

                <div class="match-status">

                    ${
                        w
                            ? `${w} POSTUPUJE`
                            : (
                                match?.player1 &&
                                match?.player2
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

function nextMatch(player1, player2, data) {

    return {

        player1,
        player2,

        score1:
            data?.score1 ??
            null,

        score2:
            data?.score2 ??
            null,

        streams:
            data?.streams ||
            []

    };
}


// ============================================================
// WINNERS BRACKET
// ============================================================

function renderWinnerBracket(
    matches,
    r2Data,
    finalData
) {

    const w1 = winner(matches[0]);
    const w2 = winner(matches[1]);
    const w3 = winner(matches[2]);
    const w4 = winner(matches[3]);

    const r2a = nextMatch(
        w1,
        w2,
        r2Data[0]
    );

    const r2b = nextMatch(
        w3,
        w4,
        r2Data[1]
    );

    const wf = nextMatch(
        winner(r2a),
        winner(r2b),
        finalData
    );

    return `

        <div class="bracket-title winner-title">
            WINNERS BRACKET
        </div>

        <div class="bracket winner-bracket">

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


            <div class="round final-round">

                <div class="round-title">
                    FINÁLE WINNERS
                </div>

                ${matchBox(
                    wf,
                    "FINÁLE WINNERS",
                    "wb-final"
                )}

            </div>

        </div>


        <div class="bracket-note">

            ❗ První prohra = přesun do LOSERS BRACKET.
            Druhá prohra = vyřazení.

        </div>

    `;
}


// ============================================================
// LOSERS BRACKET
// ============================================================
//
// DŮLEŽITÉ:
//
// LB1 + LB2
//      ↓
// LB3 + LB4
//      ↓
// LB MEZIFINÁLE
//      ↓
// LB FINÁLE proti poraženému WB FINÁLE
//      ↓
// GRAND FINÁLE proti vítězi WB FINÁLE
//
// ============================================================

function renderLosersBracket(
    matches,
    wbR2Data,
    lbR1Data,
    lbR2Data,
    lbMidFinalData,
    lbFinalData,
    wbFinalData,
    grandFinalData
) {

    // --------------------------------------------------------
    // LOSERS BRACKET — 1. KOLO
    // --------------------------------------------------------

    const l1 = loser(matches[0]);
    const l2 = loser(matches[1]);
    const l3 = loser(matches[2]);
    const l4 = loser(matches[3]);


    const lb1 = nextMatch(
        l1,
        l2,
        lbR1Data[0]
    );

    const lb2 = nextMatch(
        l3,
        l4,
        lbR1Data[1]
    );


    // --------------------------------------------------------
    // WINNERS SEMIFINÁLE
    // --------------------------------------------------------

    const wb1 = nextMatch(
        winner(matches[0]),
        winner(matches[1]),
        wbR2Data[0]
    );

    const wb2 = nextMatch(
        winner(matches[2]),
        winner(matches[3]),
        wbR2Data[1]
    );


    // --------------------------------------------------------
    // LOSERS BRACKET — 2. KOLO
    // --------------------------------------------------------
    //
    // Vítěz LB1 vs poražený WB semifinále 1
    //
    // Vítěz LB2 vs poražený WB semifinále 2
    //
    // --------------------------------------------------------

    const lb3 = nextMatch(
        winner(lb1),
        loser(wb1),
        lbR2Data[0]
    );

    const lb4 = nextMatch(
        winner(lb2),
        loser(wb2),
        lbR2Data[1]
    );


    // --------------------------------------------------------
    // NOVÝ MEZIKROK
    // --------------------------------------------------------
    //
    // Vítěz LB ZÁPASU 3
    //          VS
    // Vítěz LB ZÁPASU 4
    //
    // --------------------------------------------------------

    const lbMidFinal = nextMatch(
        winner(lb3),
        winner(lb4),
        lbMidFinalData
    );


    // --------------------------------------------------------
    // WINNERS FINÁLE
    // --------------------------------------------------------

    const wbFinal = nextMatch(
        winner(wb1),
        winner(wb2),
        wbFinalData
    );


    // --------------------------------------------------------
    // LOSERS FINÁLE
    // --------------------------------------------------------
    //
    // Vítěz LB MEZIFINÁLE
    //          VS
    // Poražený FINÁLE WINNERS
    //
    // Například:
    //
    // vítěz LB3 + LB4
    //          ↓
    //      proti Zelvaovi
    //
    // pokud Zelvaa prohraje Winners finále.
    //
    // --------------------------------------------------------

    const lbFinal = nextMatch(
        winner(lbMidFinal),
        loser(wbFinal),
        lbFinalData
    );


    // --------------------------------------------------------
    // GRAND FINÁLE
    // --------------------------------------------------------
    //
    // Vítěz Winners finále
    //          VS
    // Vítěz Losers finále
    //
    // --------------------------------------------------------

    const grandFinal = nextMatch(
        winner(wbFinal),
        winner(lbFinal),
        grandFinalData
    );


    return `

        <div class="bracket-title losers-title">
            LOSERS BRACKET
        </div>


        <div class="bracket losers-bracket">


            <!-- ==============================================
                 LOSERS 1
            =============================================== -->

            <div class="round lb-round1">

                <div class="round-title">
                    LOSERS 1
                </div>

                ${matchBox(
                    lb1,
                    "LB ZÁPAS 1"
                )}

                ${matchBox(
                    lb2,
                    "LB ZÁPAS 2"
                )}

            </div>


            <!-- ==============================================
                 LOSERS 2
            =============================================== -->

            <div class="round lb-round2">

                <div class="round-title">
                    LOSERS 2
                </div>

                ${matchBox(
                    lb3,
                    "LB ZÁPAS 3"
                )}

                ${matchBox(
                    lb4,
                    "LB ZÁPAS 4"
                )}

            </div>


            <!-- ==============================================
                 NOVÝ MEZIKROK
            =============================================== -->

            <div class="round lb-mid-final-round">

                <div class="round-title">
                    LB MEZIFINÁLE
                </div>

                ${matchBox(
                    lbMidFinal,
                    "VÍTĚZ LB 3 vs VÍTĚZ LB 4",
                    "lb-mid-final"
                )}

            </div>


            <!-- ==============================================
                 LOSERS FINÁLE
            =============================================== -->

            <div class="round lb-final-round">

                <div class="round-title">
                    LOSERS FINÁLE
                </div>

                ${matchBox(
                    lbFinal,
                    "FINÁLE LOSERS",
                    "lb-final"
                )}

            </div>


        </div>


        <!-- ==================================================
             GRAND FINÁLE
        =================================================== -->

        <div class="grand-final">

            <div class="round-title">
                🏆 GRAND FINÁLE
            </div>


            <div class="grand-final-grid">


                <div>

                    <div class="grand-final-source">
                        WINNERS BRACKET
                    </div>

                    ${playerRow(
                        winner(wbFinal),
                        null
                    )}

                </div>


                <div class="grand-final-vs">
                    VS
                </div>


                <div>

                    <div class="grand-final-source">
                        LOSERS BRACKET
                    </div>

                    ${playerRow(
                        winner(lbFinal),
                        null
                    )}

                </div>


            </div>


            <div class="grand-final-match">

                ${matchBox(
                    grandFinal,
                    "GRAND FINÁLE"
                )}

            </div>

        </div>

    `;
}


// ============================================================
// RENDER GROUP
// ============================================================

function renderGroup(
    containerId,
    matches,
    wbR2Data,
    wbFinalData,
    lbR1Data,
    lbR2Data,
    lbMidFinalData,
    lbFinalData,
    grandFinalData
) {

    const container =
        document.getElementById(containerId);

    if (!container) {
        return;
    }


    container.innerHTML = `

        ${renderWinnerBracket(
            matches,
            wbR2Data,
            wbFinalData
        )}

        ${renderLosersBracket(
            matches,
            wbR2Data,
            lbR1Data,
            lbR2Data,
            lbMidFinalData,
            lbFinalData,
            wbFinalData,
            grandFinalData
        )}

    `;
}


// ============================================================
// MAIN RENDER
// ============================================================

function render() {

    // --------------------------------------------------------
    // SKUPINA 1
    // --------------------------------------------------------

    renderGroup(
        "bracket-group1",

        GROUP1,

        GROUP1_WB_R2,
        GROUP1_WB_FINAL,

        GROUP1_LB_R1,
        GROUP1_LB_R2,
        GROUP1_LB_MID_FINAL,
        GROUP1_LB_FINAL,

        GROUP1_GRAND_FINAL
    );


    // --------------------------------------------------------
    // SKUPINA 2
    // --------------------------------------------------------

    renderGroup(
        "bracket-group2",

        GROUP2,

        GROUP2_WB_R2,
        GROUP2_WB_FINAL,

        GROUP2_LB_R1,
        GROUP2_LB_R2,
        GROUP2_LB_MID_FINAL,
        GROUP2_LB_FINAL,

        GROUP2_GRAND_FINAL
    );


    // --------------------------------------------------------
    // SKUPINA 3
    // --------------------------------------------------------

    renderGroup(
        "bracket-group3",

        GROUP3,

        GROUP3_WB_R2,
        GROUP3_WB_FINAL,

        GROUP3_LB_R1,
        GROUP3_LB_R2,
        GROUP3_LB_MID_FINAL,
        GROUP3_LB_FINAL,

        GROUP3_GRAND_FINAL
    );


    // --------------------------------------------------------
    // SKUPINA 4
    // --------------------------------------------------------

    renderGroup(
        "bracket-group4",

        GROUP4,

        GROUP4_WB_R2,
        GROUP4_WB_FINAL,

        GROUP4_LB_R1,
        GROUP4_LB_R2,
        GROUP4_LB_MID_FINAL,
        GROUP4_LB_FINAL,

        GROUP4_GRAND_FINAL
    );
}


// ============================================================
// START
// ============================================================

render();
