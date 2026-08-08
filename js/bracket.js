// ============================================================
// ENTRYHO AXEPVP - OPRAVDOVÝ PAVOUK
// ============================================================
// TADY MĚNÍŠ POUZE VÝSLEDKY.
//
// 20:0 -> vyhrává hráč 1 a automaticky se objeví v dalším boxu.
// 0:20 -> vyhrává hráč 2 a automaticky se objeví v dalším boxu.
//
// null = zápas ještě není odehraný.
//
// Až budeš mít další skupinu, můžeme stejný systém přidat jako
// další samostatný pavouk. Tento první se tím nerozbije.
// ============================================================

const YOUTUBE = "https://www.youtube.com/@Entry14";

const MATCHES = [
  {
    player1: "MINER99",
    player2: "rnd0",
    score1: null,
    score2: null,
    record: YOUTUBE
  },
  {
    player1: "Kyokutan_",
    player2: "Sajk3000",
    score1: null,
    score2: null,
    record: YOUTUBE
  },
  {
    player1: "xDaniCz",
    player2: "Jangche",
    score1: null,
    score2: null,
    record: YOUTUBE
  },
  {
    player1: "Zelvaa",
    player2: "Nojmisek",
    score1: null,
    score2: null,
    record: YOUTUBE
  }
];

// ------------------------------------------------------------
// LOGIKA - NA TOHLE NESAHEJ
// ------------------------------------------------------------

function avatar(name) {
  return "https://mc-heads.net/avatar/" + encodeURIComponent(name) + "/64";
}

function winner(match) {
  if (!match.player1 || !match.player2) return null;
  if (match.score1 === null || match.score2 === null) return null;

  if (match.score1 === 20 && match.score2 < 20) return match.player1;
  if (match.score2 === 20 && match.score1 < 20) return match.player2;

  return null;
}

function playerRow(name, score) {
  if (!name) {
    return `
      <div class="player waiting">
        <div class="head empty">?</div>
        <span>ČEKÁ</span>
        <strong>—</strong>
      </div>`;
  }

  return `
    <div class="player">
      <img class="head" src="${avatar(name)}"
           onerror="this.src='https://mc-heads.net/avatar/Steve/64'" alt="">
      <span>${name}</span>
      <strong>${score === null ? "—" : score}</strong>
    </div>`;
}

function matchBox(match, label) {
  const w = winner(match);

  return `
    <div class="match-wrap">
      <div class="match-label">${label}</div>
      <div class="match ${w ? "won" : ""}">
        ${playerRow(match.player1, match.score1)}
        ${playerRow(match.player2, match.score2)}

        <a class="record" href="${match.record || YOUTUBE}" target="_blank" rel="noopener">
          ▶ SLEDOVAT ZÁZNAM
        </a>

        <div class="match-status">
          ${w ? "✓ " + w + " POSTUPUJE" : "HRAJE SE DO 20"}
        </div>
      </div>
    </div>`;
}

// ------------------------------------------------------------
// DALŠÍ KOLO
// Vítězové z prvních 4 boxů se automaticky vloží sem.
// Výsledek tohoto kola se zapisuje do ROUND2.
// ------------------------------------------------------------

const ROUND2 = [
  { score1: null, score2: null, record: YOUTUBE },
  { score1: null, score2: null, record: YOUTUBE }
];

// FINÁLE
const FINAL = {
  score1: null,
  score2: null,
  record: YOUTUBE
};

function nextMatch(p1, p2, data) {
  return {
    player1: p1,
    player2: p2,
    score1: data.score1,
    score2: data.score2,
    record: data.record
  };
}

function render() {
  const w1 = winner(MATCHES[0]);
  const w2 = winner(MATCHES[1]);
  const w3 = winner(MATCHES[2]);
  const w4 = winner(MATCHES[3]);

  const r2a = nextMatch(w1, w2, ROUND2[0]);
  const r2b = nextMatch(w3, w4, ROUND2[1]);

  const w5 = winner(r2a);
  const w6 = winner(r2b);

  const final = nextMatch(w5, w6, FINAL);
  const champion = winner(final);

  document.getElementById("bracket").innerHTML = `
    <section class="bracket">

      <div class="round round1">
        <div class="round-title">ČTVRTFINÁLE</div>
        ${matchBox(MATCHES[0], "ZÁPAS 1")}
        ${matchBox(MATCHES[1], "ZÁPAS 2")}
        ${matchBox(MATCHES[2], "ZÁPAS 3")}
        ${matchBox(MATCHES[3], "ZÁPAS 4")}
      </div>

      <div class="round round2">
        <div class="round-title">SEMIFINÁLE</div>
        ${matchBox(r2a, "SEMIFINÁLE 1")}
        ${matchBox(r2b, "SEMIFINÁLE 2")}
      </div>

      <div class="round final-round">
        <div class="round-title">FINÁLE</div>
        ${matchBox(final, "FINÁLE")}

        <div class="champion ${champion ? "active" : ""}">
          <small>🏆 VÍTĚZ SKUPINY</small>
          <div>
            ${champion
              ? `<img src="${avatar(champion)}" alt=""><strong>${champion}</strong>`
              : `<strong>ČEKÁME NA VÍTĚZE</strong>`}
          </div>
        </div>
      </div>

    </section>`;
}

render();
