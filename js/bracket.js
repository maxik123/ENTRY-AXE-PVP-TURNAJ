// ============================================================
// ENTRYHO AXEPVP — DOUBLE ELIMINATION
// ============================================================
// Jak přidat stream:
// streams: ["https://youtube.com/live/TVUJ-LINK"]
//
// Pokud má zápas více streamů:
// streams: [
//   "https://youtube.com/live/LINK-1",
//   "https://youtube.com/live/LINK-2"
// ]
//
// Na webu se URL nikdy nevypisuje. Zobrazí se pouze tlačítko
// „▶ SLEDOVAT STREAM“.
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
    { score1: 20, score2: 10, streams: [] },
    { score1: 19, score2: 20, streams: [] }
];

const GROUP1_WB_FINAL = {
    score1: 20,
    score2: 2,
    streams: []
};

// ============================================================
// SKUPINA 1 — LOSERS BRACKET
// ============================================================
// LB R1:
// poražený zápasu 1 vs poražený zápasu 2
// poražený zápasu 3 vs poražený zápasu 4
//
// LB R2:
// poražený WB semifinále 1 vs poražený WB semifinále 2
// vítěz LB R1-1 vs vítěz LB R1-2
//
// LB FINÁLE:
// vítězové LB R2
//
// GRAND FINÁLE:
// vítěz WB finále vs vítěz LB finále

const GROUP1_LB_R1 = [
    { score1: 7, score2: 20, streams: [] },
    { score1: 20, score2: 0, streams: [] }
];

const GROUP1_LB_R2 = [
    { score1: null, score2: null, streams: [] },
    { score1: null, score2: null, streams: [] }
];

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
    { score1: 20, score2: 2, streams: [] },
    { score1: null, score2: null, streams: [] }
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
    { score1: null, score2: null, streams: [] },
    { score1: null, score2: null, streams: [] }
];

const GROUP2_LB_R2 = [
    { score1: null, score2: null, streams: [] },
    { score1: null, score2: null, streams: [] }
];

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
        player1: "_Lukykng",
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
        score1: null,
        score2: null,
        streams: []
    }
];

const GROUP3_WB_R2 = [
    { score1: null, score2: null, streams: [] },
    { score1: null, score2: null, streams: [] }
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
    { score1: null, score2: null, streams: [] },
    { score1: null, score2: null, streams: [] }
];

const GROUP3_LB_R2 = [
    { score1: null, score2: null, streams: [] },
    { score1: null, score2: null, streams: [] }
];

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
        score1: null,
        score2: null,
        streams: []
    }
];

const GROUP4_WB_R2 = [
    { score1: null, score2: null, streams: [] },
    { score1: null, score2: null, streams: [] }
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
    { score1: null, score2: null, streams: [] },
    { score1: null, score2: null, streams: [] }
];

const GROUP4_LB_R2 = [
    { score1: null, score2: null, streams: [] },
    { score1: null, score2: null, streams: [] }
];

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
    return "https://mc-heads.net/avatar/" + encodeURIComponent(name) + "/64";
}

function winner(match) {
    if (!match || !match.player1 || !match.player2) return null;
    if (match.score1 === null || match.score2 === null) return null;

    if (match.score1 === 20 && match.score2 < 20) return match.player1;
    if (match.score2 === 20 && match.score1 < 20) return match.player2;

    return null;
}

function loser(match) {
    const w = winner(match);
    if (!w || !match) return null;
    return w === match.player1 ? match.player2 : match.player1;
}

function playerRow(name, score) {
    if (!name) {
        return `
            <div class="player waiting">
                <div class="head empty">?</div>
                <span>ČEKÁME</span>
                <strong>—</strong>
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
            <span>${name}</span>
            <strong>${score === null ? "—" : score}</strong>
        </div>
    `;
}

function streamButtons(match) {
    const streams = Array.isArray(match?.streams)
        ? match.streams.filter(Boolean)
        : [];

    if (!streams.length) return "";

    if (streams.length === 1) {
        return `
            <a class="record"
               href="${streams[0]}"
               target="_blank"
               rel="noopener noreferrer">
                ▶ SLEDOVAT STREAM
            </a>
        `;
    }

    return `
        <div class="stream-list">
            ${streams.map((url, i) => `
                <a class="record"
                   href="${url}"
                   target="_blank"
                   rel="noopener noreferrer">
                    ▶ SLEDOVAT STREAM ${i + 1}
                </a>
            `).join("")}
        </div>
    `;
}

function matchBox(match, label, extraClass = "") {
    const w = winner(match);

    return `
        <div class="match-wrap">
            ${label ? `<div class="match-label">${label}</div>` : ""}

            <div class="match ${w ? "won" : ""} ${extraClass}">
                ${playerRow(match?.player1, match?.score1 ?? null)}
                ${playerRow(match?.player2, match?.score2 ?? null)}

                ${streamButtons(match || {})}

                <div class="match-status">
                    ${
                        w
                        ? `${w} POSTUPUJE`
                        : (
                            match?.player1 && match?.player2
                            ? "ČEKÁME NA VÝSLEDEK"
                            : "ČEKÁME NA HRÁČE"
                        )
                    }
                </div>
            </div>
        </div>
    `;
}

function nextMatch(player1, player2, data) {
    return {
        player1,
        player2,
        score1: data?.score1 ?? null,
        score2: data?.score2 ?? null,
        streams: data?.streams || []
    };
}

function renderWinnerBracket(matches, r2Data, finalData) {
    const w1 = winner(matches[0]);
    const w2 = winner(matches[1]);
    const w3 = winner(matches[2]);
    const w4 = winner(matches[3]);

    const r2a = nextMatch(w1, w2, r2Data[0]);
    const r2b = nextMatch(w3, w4, r2Data[1]);

    const wf = nextMatch(winner(r2a), winner(r2b), finalData);

    return `
        <div class="bracket-title winner-title">WINNERS BRACKET</div>

        <div class="bracket winner-bracket">
            <div class="round round1">
                <div class="round-title">1. KOLO</div>
                ${matchBox(matches[0], "ZÁPAS 1")}
                ${matchBox(matches[1], "ZÁPAS 2")}
                ${matchBox(matches[2], "ZÁPAS 3")}
                ${matchBox(matches[3], "ZÁPAS 4")}
            </div>

            <div class="round round2">
                <div class="round-title">SEMIFINÁLE</div>
                ${matchBox(r2a, "SEMIFINÁLE 1")}
                ${matchBox(r2b, "SEMIFINÁLE 2")}
            </div>

            <div class="round final-round">
                <div class="round-title">FINÁLE WINNERS</div>
                ${matchBox(wf, "FINÁLE WINNERS", "wb-final")}
            </div>
        </div>

        <div class="bracket-note">
            ❗ První prohra = přesun do LOSERS BRACKET. Druhá prohra = vyřazení.
        </div>
    `;
}

function renderLosersBracket(matches, wbR2Data, lbR1Data, lbR2Data, lbFinalData, wbFinalData, grandFinalData) {
    const l1 = loser(matches[0]);
    const l2 = loser(matches[1]);
    const l3 = loser(matches[2]);
    const l4 = loser(matches[3]);

    const lb1 = nextMatch(l1, l2, lbR1Data[0]);
    const lb2 = nextMatch(l3, l4, lbR1Data[1]);

    const wb1 = nextMatch(winner(matches[0]), winner(matches[1]), wbR2Data[0]);
    const wb2 = nextMatch(winner(matches[2]), winner(matches[3]), wbR2Data[1]);

    // LB R2 je rozdělené tak, jak má být pro tento pavouk:
    // 1) vítězové prvního kola Losers proti sobě
    // 2) poražení semifinále Winners proti sobě
    //
    // Tím pádem například Kyokutan (poražený SF1)
    // automaticky nastoupí proti poraženému ze SF2.
    const lb3 = nextMatch(loser(wb1), loser(wb2), lbR2Data[0]);
    const lb4 = nextMatch(winner(lb1), winner(lb2), lbR2Data[1]);

    const lbFinal = nextMatch(winner(lb3), winner(lb4), lbFinalData);

    const wbFinal = nextMatch(winner(wb1), winner(wb2), wbFinalData);
    const grandFinal = nextMatch(winner(wbFinal), winner(lbFinal), grandFinalData);

    return `
        <div class="bracket-title losers-title">LOSERS BRACKET</div>

        <div class="bracket losers-bracket">
            <div class="round lb-round1">
                <div class="round-title">LOSERS 1</div>
                ${matchBox(lb1, "LB ZÁPAS 1")}
                ${matchBox(lb2, "LB ZÁPAS 2")}
            </div>

            <div class="round lb-round2">
                <div class="round-title">LOSERS 2</div>
                ${matchBox(lb3, "LB ZÁPAS 3")}
                ${matchBox(lb4, "LB ZÁPAS 4")}
            </div>

            <div class="round lb-final-round">
                <div class="round-title">LOSERS FINÁLE</div>
                ${matchBox(lbFinal, "FINÁLE LOSERS")}
            </div>
        </div>

        <div class="grand-final">
            <div class="round-title">🏆 GRAND FINÁLE</div>
            <div class="grand-final-grid">
                <div>
                    <div class="grand-final-source">WINNERS BRACKET</div>
                    ${playerRow(winner(wbFinal), null)}
                </div>
                <div class="grand-final-vs">VS</div>
                <div>
                    <div class="grand-final-source">LOSERS BRACKET</div>
                    ${playerRow(winner(lbFinal), null)}
                </div>
            </div>
            <div class="grand-final-match">
                ${matchBox(grandFinal, "GRAND FINÁLE")}
            </div>
        </div>
    `;
}

function renderGroup(containerId, matches, wbR2Data, wbFinalData, lbR1Data, lbR2Data, lbFinalData, grandFinalData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        ${renderWinnerBracket(matches, wbR2Data, wbFinalData)}
        ${renderLosersBracket(
            matches,
            wbR2Data,
            lbR1Data,
            lbR2Data,
            lbFinalData,
            wbFinalData,
            grandFinalData
        )}
    `;
}

function render() {
    renderGroup(
        "bracket-group1",
        GROUP1,
        GROUP1_WB_R2,
        GROUP1_WB_FINAL,
        GROUP1_LB_R1,
        GROUP1_LB_R2,
        GROUP1_LB_FINAL,
        GROUP1_GRAND_FINAL
    );

    renderGroup(
        "bracket-group2",
        GROUP2,
        GROUP2_WB_R2,
        GROUP2_WB_FINAL,
        GROUP2_LB_R1,
        GROUP2_LB_R2,
        GROUP2_LB_FINAL,
        GROUP2_GRAND_FINAL
    );

    renderGroup(
        "bracket-group3",
        GROUP3,
        GROUP3_WB_R2,
        GROUP3_WB_FINAL,
        GROUP3_LB_R1,
        GROUP3_LB_R2,
        GROUP3_LB_FINAL,
        GROUP3_GRAND_FINAL
    );

    renderGroup(
        "bracket-group4",
        GROUP4,
        GROUP4_WB_R2,
        GROUP4_WB_FINAL,
        GROUP4_LB_R1,
        GROUP4_LB_R2,
        GROUP4_LB_FINAL,
        GROUP4_GRAND_FINAL
    );
}

render();
