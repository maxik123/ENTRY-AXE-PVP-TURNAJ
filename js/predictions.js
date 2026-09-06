// =======================================
//        FIREBASE AXE PREDICTIONS
// =======================================

import {
    doc,
    getDoc,
    setDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

// =======================================
//        NADCHÁZEJÍCÍ ZÁPASY
// =======================================

const matches = [
    {
        id: "sajk-kyokutan",
        player1: "Sajk3000",
        player2: "Kyokutan_",
        date: "?. ?. 2026",
        time: "?",
        stream: ""
    },
    {
        id: "lukyk-predator",
        player1: "Lukyk656",
        player2: "Predator_18",
        date: "?. ?. 2026",
        time: "?",
        stream: ""
    },
    {
        id: "drown-retr",
        player1: "Alpha_R3turns",
        player2: "DroWnerT",
        date: "6. 9. 2026",
        time: "19:00",
        stream: ""
    }
];

// =======================================
//        HELPERY
// =======================================

const container = document.getElementById("predictions");

function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    }[char]));
}

function renderMatch(match, p1 = 0, p2 = 0) {
    if (!container) return;

    const total = p1 + p2;
    const percent = total > 0 ? Math.round((p1 / total) * 100) : 0;
    const percent2 = total > 0 ? 100 - percent : 0;

    const old = document.getElementById(match.id);

    const streamHtml = match.stream
        ? `<a class="watch-live" href="${escapeHtml(match.stream)}" target="_blank" rel="noopener noreferrer">▶ Sledovat živě</a>`
        : `<span class="watch-live disabled">▶ Stream bude doplněn</span>`;

    const html = `
        <div class="prediction-card" id="${escapeHtml(match.id)}">
            <h3>
                ${escapeHtml(match.player1)}
                VS
                ${escapeHtml(match.player2)}
            </h3>

            <div class="prediction-buttons">
                <div class="player-side">
                    <img
                        class="player-head"
                        src="https://mc-heads.net/avatar/${encodeURIComponent(match.player1)}/64"
                        alt="${escapeHtml(match.player1)}"
                        onerror="this.src='https://mc-heads.net/avatar/Steve/64'"
                    >
                    <button type="button" onclick="vote('${escapeHtml(match.id)}','${escapeHtml(match.player1)}')">
                        ${escapeHtml(match.player1)}
                    </button>
                </div>

                <div class="player-side">
                    <button type="button" onclick="vote('${escapeHtml(match.id)}','${escapeHtml(match.player2)}')">
                        ${escapeHtml(match.player2)}
                    </button>
                    <img
                        class="player-head"
                        src="https://mc-heads.net/avatar/${encodeURIComponent(match.player2)}/64"
                        alt="${escapeHtml(match.player2)}"
                        onerror="this.src='https://mc-heads.net/avatar/Steve/64'"
                    >
                </div>
            </div>

            <div class="prediction-bar">
                <div class="prediction-bar-left" style="width:${percent}%"></div>
            </div>

            <div class="prediction-footer">
                <span>${escapeHtml(match.date)} • ${escapeHtml(match.time)}</span>
                ${streamHtml}
            </div>

            <p class="prediction-result">
                ${escapeHtml(match.player1)}: ${percent}%
                <br>
                ${escapeHtml(match.player2)}: ${percent2}%
                <br><br>
                ${total} hlasů
            </p>
        </div>
    `;

    if (old) {
        old.outerHTML = html;
    } else {
        container.insertAdjacentHTML("beforeend", html);
    }
}

// =======================================
//        ZOBRAZENÍ ZÁPASŮ
// =======================================

// DŮLEŽITÉ:
// Zápasy se vykreslí OKAMŽITĚ a nejsou závislé na Firebase.
// Firebase pouze následně načte/aktualizuje počet hlasů.
// Díky tomu se zápasy zobrazí i při dočasném problému s Firestore.

function renderInitialMatches() {
    if (!container) return;

    container.innerHTML = "";

    matches.forEach(match => {
        renderMatch(match, 0, 0);
    });
}

function loadPredictions() {
    if (!container) return;

    matches.forEach(match => {
        // Pokud Firebase není připravený, zápas už je stejně zobrazený.
        if (!window.db) {
            return;
        }

        const ref = doc(window.db, "predictions", match.id);

        onSnapshot(
            ref,
            snapshot => {
                const data = snapshot.exists()
                    ? snapshot.data()
                    : {};

                const p1 = Number(data[match.player1] || 0);
                const p2 = Number(data[match.player2] || 0);

                renderMatch(match, p1, p2);
            },
            error => {
                console.warn(`Firebase prediction error for ${match.id}:`, error);
                // Nic nemažeme — zápas zůstane zobrazený s 0 hlasy.
            }
        );
    });
}

// =======================================
//              HLASOVÁNÍ
// =======================================

window.vote = async function(id, player) {
    const match = matches.find(m => m.id === id);

    if (!match) return;

    const votedKey = "voted_" + id;

    if (localStorage.getItem(votedKey)) {
        alert("Už jsi hlasoval v tomto zápase!");
        return;
    }

    if (!window.db) {
        alert("Hlasování je momentálně nedostupné. Zápas je ale stále viditelný.");
        return;
    }

    try {
        const ref = doc(window.db, "predictions", id);
        const snap = await getDoc(ref);

        const data = snap.exists() ? snap.data() : {};

        data[match.player1] = Number(data[match.player1] || 0);
        data[match.player2] = Number(data[match.player2] || 0);

        if (player !== match.player1 && player !== match.player2) {
            return;
        }

        data[player]++;

        await setDoc(ref, data);
        localStorage.setItem(votedKey, "true");
    } catch (error) {
        console.error("Vote error:", error);
        alert("Hlas se nepodařilo uložit. Zkus to prosím znovu.");
    }
};

// =======================================
//              START
// =======================================

// Nejdřív zobrazit zápasy.
// Až potom připojit Firebase.
renderInitialMatches();
loadPredictions();
