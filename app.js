/*
proyecto Pasapalabra-html
Berenguer Pou
precourse ISDI Coders 2022-1
*/

const questionsSpanish = [
  {
    letter: "a",
    questions: [
      {
        question: "CON LA A. Apellido del autor de Javascript Mental Models",
        answer: "abramov",
      },
      {
        question: "CON LA A. Objeto JS que puede almacenar un conjunto de datos ordenado",
        answer: "array",
      },
      { question: "CONTIENE LA A. Cuando sale el sol", answer: "alba" },
    ],
  },
  {
    letter: "b",
    questions: [
      {
        question: "CON LA B. Tipo de valor que almacena 'true' o 'false'",
        answer: "booleano",
      },
      { question: "CON LA B. Capital de Catalunya", answer: "barcelona" },
      {
        question: "CONTIENE LA B. Sinónimo de terminar, finalizar",
        answer: "acabar",
      },
    ],
  },
  {
    letter: "c",
    questions: [
      {
        question: "CON LA C. Primer clasificado en un torneo",
        answer: "campeón",
      },
      {
        question: "CON LA C. Animal que adapta su color al entorno",
        answer: "camaleón",
      },
      {
        question: "CONTIENE LA C. Siglas de la antigua Unión Soviética en cirílico",
        answer: "cccp",
      },
    ],
  },
  {
    letter: "d",
    questions: [
      {
        question: "CON LA D. Nombre del gnomo más famoso del bosque",
        answer: "david",
      },
      { question: "CON LA D. Relativo a los dioses", answer: "divino" },
      {
        question: "CONTIENE LA D. Método que procesa elementos en un array y devuelve un solo valor final",
        answer: "reduce",
      },
    ],
  },
  {
    letter: "e",
    questions: [
      {
        question: "CON LA E. En una web se encuentran en una hoja y en cascada",
        answer: "estilos",
      },
      {
        question: "CON LA E. Madera oscura y noble muy apreciada",
        answer: "ébano",
      },
      {
        question: "CONTIENE LA E. Chiste gráfico que corre por las redes sociales",
        answer: "meme",
      },
    ],
  },
  {
    letter: "f",
    questions: [
      {
        question: "CON LA F. Método que selecciona elementos en un array según una condición",
        answer: "filter",
      },
      {
        question: "CON LA F. Tipo de pirata que no es corsario ni bucanero",
        answer: "filibustero",
      },
      {
        question: "CONTIENE la F. Reducir la presión, la tensión",
        answer: "aflojar",
      },
    ],
  },
  {
    letter: "g",
    questions: [
      {
        question: "CON LA G. Campo de trabajo siberiano creado por Stalin",
        answer: "gulag",
      },
      {
        question: "CON LA G. Marca americana  de dispositivos GPS",
        answer: "garmin",
      },
      {
        question: "CONTIENE LA G. Nombre del pallaso blanco por excelencia",
        answer: "augusto",
      },
    ],
  },
  {
    letter: "h",
    questions: [
      { question: "CON LA H. Comunicar oralmente", answer: "hablar" },
      {
        question: "CON LA H. Espacio del coche en el que viajan los pasajeros",
        answer: "habitáculo",
      },
      {
        question: "CONTIENE LA H. Más allá de las fuerzas humanas",
        answer: "sobrehumano",
      },
    ],
  },
  {
    letter: "i",
    questions: [
      { question: "CON LA I. País con muchos developers", answer: "india" },
      {
        question: "CON LA I. Nombre del zar ruso más terrible",
        answer: "iván",
      },
      {
        question: "CONTIENE LA I. La lengua de los enemigos de Astérix",
        answer: "latín",
      },
    ],
  },
  {
    letter: "j",
    questions: [
      {
        question: "CON LA J. Librería JS que ya quedó desfasada",
        answer: "jquery",
      },
      { question: "CON LA J. Si es de bellota es mejor", answer: "jamón" },
      { question: "CONTIENE LA J. Goya la pintó desnuda", answer: "maja" },
    ],
  },
  {
    letter: "k",
    questions: [
      {
        question: "CON LA K. Nombre del autor de You Don't Know JS Yet",
        answer: "kyle",
      },
      {
        question: "CON LA K. Elemento que hace pareja con un 'value' en un objeto JS",
        answer: "key",
      },
      {
        question: "CONTIENE LA K. Bebida espirituosa japonesa",
        answer: "sake",
      },
    ],
  },
  {
    letter: "l",
    questions: [
      {
        question: "CON LA L. Extensión de un array o string en JS",
        answer: "length",
      },
      {
        question: "CON LA L. Rey belga que colonizó el Congo",
        answer: "leopoldo",
      },
      {
        question: "CONTIENE LA L. Si no tienes una, cavar el hoyo será difícil",
        answer: "pala",
      },
    ],
  },
  {
    letter: "m",
    questions: [
      {
        question: "CON LA M. Nombre de una conocida base de datos no SQL de código abierto",
        answer: "mongodb",
      },
      {
        question: "CON LA M. Compañía que posee VSCode y Github",
        answer: "microsoft",
      },
      {
        question: "CONTIENE LA M. El tío más americano de todos",
        answer: "sam",
      },
    ],
  },
  {
    letter: "n",
    questions: [
      {
        question: "CON LA N. Valor indefinido que se asigna intencionalmente en JS",
        answer: "null",
      },
      { question: "CON LA N. Si no es un número en JS es...", answer: "nan" },
      {
        question: "CONTIENE LA N. Valor que almacena una variable no inicializada",
        answer: "undefined",
      },
    ],
  },
  {
    letter: "o",
    questions: [
      {
        question: "CON LA O. Siglas en inglés de la Programación Orientada a Objetos",
        answer: "oop",
      },
      { question: "CON LA O. Periódico deportivo argentino", answer: "olé" },
      {
        question: "CONTIENE LA O. Método que elimina el último elemento de un array",
        answer: "pop",
      },
    ],
  },
  {
    letter: "p",
    questions: [
      {
        question: "CON LA P. Cuando él no está manda marinero...",
        answer: "patrón",
      },
      {
        question: "CON LA P. Método que añade un nuevo elemento al final de un array",
        answer: "push",
      },
      {
        question: "CONTIENE LA P. La marca que fundó Steve Jobs",
        answer: "apple",
      },
    ],
  },
  {
    letter: "q",
    questions: [
      {
        question: "CON LA Q. Fabulación, un casi imposible...",
        answer: "quimera",
      },
      { question: "CON LA Q. Sinónimo de romper, partir", answer: "quebrar" },
      {
        question: "CONTIENE LA Q. Casi todos los manda Amazon",
        answer: "paquetes",
      },
    ],
  },
  {
    letter: "r",
    questions: [
      {
        question: "CON LA R. Lenguaje de programación de moda en 2021",
        answer: "rust",
      },
      {
        question: "CON LA R. Librería JS para crear UI's en aplicaciones web",
        answer: "react",
      },
      {
        question: "CONTIENE LA R. Método JS para eliminar espacios...",
        answer: "trim",
      },
    ],
  },
  {
    letter: "s",
    questions: [
      {
        question: "CON LA S. No le gusta nada la criptonita",
        answer: "supermán",
      },
      {
        question: "CON LA S. Tipo de dato primitivo que almacena valores de texto en JS",
        answer: "string",
      },
      {
        question: "CONTIENE LA S. Siglas del lenguaje para dar estilo a los contenidos web",
        answer: "css",
      },
    ],
  },
  {
    letter: "t",
    questions: [
      {
        question: "CON LA T. Si el código no pasa por esta fase, algo va mal",
        answer: "testing",
      },
      {
        question: "CON LA T. Si la condición se cumple JS responde...",
        answer: "true",
      },
      {
        question: "CONTIENE la T. Nombre del rey de los Hunos",
        answer: "atila",
      },
    ],
  },
  {
    letter: "u",
    questions: [
      {
        question: "CON LA U. Uno de los planetas más exteriores de la galaxia",
        answer: "urano",
      },
      { question: "CON LA U. Elemento radioactivo", answer: "uranio" },
      {
        question: "CONTIENE LA U. Framework JS competidor de React",
        answer: "vue",
      },
    ],
  },
  {
    letter: "v",
    questions: [
      {
        question: "CON LA V. Nombre del príncipe que inspiró la leyenda de Drácula",
        answer: "vlad",
      },
      {
        question: "CON LA V. Compañía tecnológica fundada por Guillermo Rauch",
        answer: "vercel",
      },
      {
        question: "CONTIENE LA V. Framework JS de moda en 2021",
        answer: "svelte",
      },
    ],
  },
  {
    letter: "w",
    questions: [
      {
        question: "CON LA W. Nombre del personaje protagonista en Braveheart",
        answer: "william",
      },
      {
        question: "CON LA W. Conocido empaquetador de módulos y dependencias JS",
        answer: "webpack",
      },
      {
        question: "CON LA W. Siglas del servicio cloud de Amazon",
        answer: "aws",
      },
    ],
  },
  {
    letter: "x",
    questions: [
      { question: "CON LA X. Odio a lo extranjero", answer: "xenofobia" },
      {
        question: "CONTIENE LA X. Cayó en la marmita y ya no necesita pócima",
        answer: "obélix",
      },
      { question: "CONTIENE LA X. Relativo al eje", answer: "axial" },
    ],
  },
  {
    letter: "y",
    questions: [
      {
        question: "CON LA Y. Uno de los primeros buscadores en internet",
        answer: "yahoo",
      },
      {
        question: "CON LA Y. Herramienta de hierro macizo que usan los herreros",
        answer: "yunque",
      },
      {
        question: "CONTIENE LA Y. Saludo japonés que gusta a Terminator",
        answer: "sayonara",
      },
    ],
  },
  {
    letter: "z",
    questions: [
      {
        question: "CON LA Z. Nombre de la plaza más grande de México",
        answer: "zócalo",
      },
      {
        question: "CON LA Z. Framework CSS competidor de Bootstrap",
        answer: "zurb",
      },
      {
        question: "CONTIENE LA Z. Compañía que fundó MDN Web Docs",
        answer: "mozilla",
      },
    ],
  },
];

const _mockrankings = [
  { name: "Abramov", score: 25 },
  { name: "Fowler", score: 23 },
  { name: "Flanagan", score: 24 },
  { name: "Kyle", score: 10 },
  { name: "Mary", score: 8 },
  { name: "Simmons", score: 12 },
  { name: "K.J.Henry", score: 15 },
];

const audioPasapalabra = new Audio("./assets/pasapalabra.mp3");
const audioCorrect = new Audio("./assets/correct.mp3");
const audioError = new Audio("./assets/error.mp3");
const audioNewGame = new Audio("./assets/startgame.mp3");
const audioEndByUser = new Audio("./assets/endbyuser.mp3");
const audioEndGame = new Audio("./assets/endgame.mp3");
const audioEndTime = new Audio("./assets/endtime.mp3");

class Game {
  constructor(
    questionSet,
    inputId,
    messageWrapperId,
    errorWrapperId,
    playerNameWrapperId,
    gameIdWrapperId,
    hitsWrapper
  ) {
    this.questionSet = questionSet;
    this.inputEl = document.getElementById(inputId);
    this.messageEl = document.getElementById(messageWrapperId);
    this.errorEl = document.getElementById(errorWrapperId);
    this.playerNameEl = document.getElementById(playerNameWrapperId);
    this.gameIdEl = document.getElementById(gameIdWrapperId);
    this.hitsEl = document.getElementById(hitsWrapper);
  }

  resetRosco() {
    this.questionList = this.questionSet.map((element) => {
      element.pasapalabraIndex = null;
      return element;
    });
    this.roscoIterator = this.questionList[Symbol.iterator]();
    this.currentLetter = null;
    this.currentQuestionIndex = null;
    this.hits = 0;
    this.errors = 0;
    this.gameId++;
    this.countdownSeconds = 150;
    this.gameIdEl.innerText = this.gameId;
    this.hitsEl.innerText = 0;
    resetLettersStyle();
  }

  setGameState(gameState) {
    switch (gameState) {
      case "start":
        this.gameId = 0;
        this.playerName = null;
        this.inputEl.onkeydown = listenUsernameInput;
        this.messageEl.innerText = `Escribe tu nombre y pulsa enter:`;
        this.inputEl.focus();
        break;
      case "play":
        this.resetRosco();
        this.getNextQuestion();
        this.inputEl.onkeydown = listenAnswerInput;
        this.inputEl.focus();
        this.startCountDown();
        audioNewGame.play();
        break;
      case "rules":
        this.inputEl.onkeydown = null;
        document.getElementById(
          "rulesHeader"
        ).innerText = `👋 Hola ${this.playerName}!\naquí puedes ver la Reglas del Juego:`;
        break;
      case "ranking":
        this.inputEl.onkeydown = null;
        break;
      default:
        break;
    }
    renderGameStateUI(gameState);
  }

  getNextQuestion() {
    this.currentLetter = this.roscoIterator.next().value;
    if (!this.currentLetter) return;
    if (this.currentLetter.pasapalabraIndex === null) {
      this.currentQuestionIndex = Math.floor(Math.random() * this.currentLetter.questions.length);
    } else {
      this.currentQuestionIndex = this.currentLetter.pasapalabraIndex;
    }
    setElementStyle(`${this.currentLetter.letter}`, ["rosco__letter--current"], ["rosco__letter--pasapalabra"]);
    this.messageEl.innerText = this.currentLetter.questions[this.currentQuestionIndex].question;
    this.inputEl.value = "";
  }

  setPasapalabra() {
    audioPasapalabra.play();
    setElementStyle(`${this.currentLetter.letter}`, ["rosco__letter--pasapalabra"], ["rosco__letter--current"]);
    this.currentLetter.pasapalabraIndex = this.currentQuestionIndex;
    this.questionList.push(this.currentLetter);
  }

  checkAnswer() {
    switch (this.inputEl.value.toLowerCase().trim()) {
      case "end":
        audioEndByUser.play();
        this.clearCountDown();
        this.messageEl.innerText = `❌ Oops! ${this.playerName}!\n Has finalizado la partida antes de completar el rosco o de final de tiempo!\nTus palabras no entran en el ránking...😥`;
        renderRanking(getRanking(this.playerName, null, this.gameId, _mockrankings));
        this.setGameState("ranking");
        return;
      case "pasapalabra":
      case "":
        this.setPasapalabra();
        break;
      case this.currentLetter.questions[this.currentQuestionIndex].answer:
        audioCorrect.play();
        this.hits++;
        setElementStyle(
          `${this.currentLetter.letter}`,
          ["rosco__letter--correct"],
          ["rosco__letter--current", "rosco__letter--pasapalabra"]
        );
        this.hitsEl.innerText = this.hits;
        triggerFX(this.hitsEl, ["stats__hits--bounce"], 2000);
        break;
      default:
        audioError.play();
        this.errors++;
        setElementStyle(
          `${this.currentLetter.letter}`,
          ["rosco__letter--incorrect"],
          ["rosco__letter--current", "rosco__letter--pasapalabra"]
        );
        this.errorEl.innerText = `🤖 Error en la letra ${this.currentLetter.letter.toUpperCase()}\nLa respuesta correcta es: ${this.currentLetter.questions[
          this.currentQuestionIndex
        ].answer.toUpperCase()}`;
        triggerFX(this.errorEl, ["errors-wrapper--show", "stats__hits--bounce"], 3000);
        break;
    }
    if (this.hits + this.errors === 26) {
      audioEndGame.play();
      this.clearCountDown();
      this.showFinalScores(false);
      return;
    }
    this.getNextQuestion();
  }

  showFinalScores(timesUp) {
    this.messageEl.innerText = timesUp
      ? `⌛️ Tiempo!! Partida finalizada!\n${this.playerName}, has acertado ${this.hits} palabras y has cometido ${this.errors} errores.\nEntras en el ránking!`
      : `🎉 Bravo ${this.playerName}! Has finalizado el rosco!\nHas acertado ${this.hits} palabras y has cometido ${this.errors} errores.\nEntras en el ránking!`;
    renderRanking(getRanking(this.playerName, this.hits, this.gameId, _mockrankings));
    this.setGameState("ranking");
  }

  checkUsername(input) {
    const regExp = /^\S*$/;
    if (input === "" || !regExp.test(input)) {
      audioError.play();
      this.messageEl.innerText = `❌ Ooops! ${input} no es un nombre válido.\nEscribe un nombre sin espacios y pulsa enter:`;
      this.inputEl.value = "";
    } else {
      this.playerName = input.toUpperCase();
      this.playerNameEl.innerText = this.playerName;
      this.inputEl.value = "";
      audioCorrect.play();
      this.setGameState("rules");
    }
  }

  startCountDown() {
    let seconds = this.countdownSeconds;
    this.countdown = setInterval(() => {
      seconds--;
      document.getElementById("countdown").textContent = seconds;
      if (seconds === 0) {
        audioEndTime.play();
        clearInterval(this.countdown);
        this.showFinalScores(true);
      }
    }, 1000);
  }

  clearCountDown() {
    clearInterval(this.countdown);
  }
}

const listenAnswerInput = (e) => {
  switch (e.code) {
    case "Enter":
      game.checkAnswer();
      break;
    case "Space":
      game.setPasapalabra();
      game.getNextQuestion();
      break;
    default:
      break;
  }
};

const listenUsernameInput = (e) => {
  if (e.code === "Enter") game.checkUsername(game.inputEl.value.trim());
};

const getRanking = (userName, score, gameId, currentRanking) => {
  if (score !== null) {
    currentRanking.push({
      name: `${userName} (#${gameId})`,
      score: score,
    });
  }
  const updatedRanking = currentRanking
    .slice()
    .sort((a, b) => b.score - a.score)
    .map((player, i) => ({ rank: i + 1, ...player }));
  return updatedRanking;
};

const renderRanking = (ranking) => {
  const rankingTable = document.createElement("table");
  const rankingWrapperElement = document.getElementById("ranking-table");
  const headerRow = rankingTable.insertRow();
  headerRow.innerHTML = "<th>rank</th><th>player</th><th>words</th>";
  ranking.forEach((user) => {
    const { rank, name, score } = user;
    const rankCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const scoreCell = document.createElement("td");
    rankCell.textContent = rank;
    nameCell.textContent = name;
    scoreCell.textContent = score;
    const userRow = rankingTable.insertRow();
    if (name === `${game.playerName} (#${game.gameId})`) {
      userRow.setAttribute("id", "user-row");
      userRow.classList.add("trow--user");
    }
    userRow.append(rankCell, nameCell, scoreCell);
  });
  rankingWrapperElement.textContent = "";
  rankingWrapperElement.appendChild(rankingTable);
};

const setElementStyle = (elementId, classesToAdd, classesToRemove = null) => {
  const element = document.getElementById(elementId);
  if (element) {
    if (classesToRemove) element.classList.remove(...classesToRemove);
    element.classList.add(...classesToAdd);
  }
};

const triggerFX = (element, cssClass, removeAfterMs) => {
  element.classList.add(...cssClass);
  setTimeout(() => element.classList.remove(...cssClass), removeAfterMs);
};

const resetLettersStyle = () => {
  Array.from(document.getElementsByClassName("rosco__letter")).forEach((element) =>
    element.classList.remove(
      "rosco__letter--current",
      "rosco__letter--correct",
      "rosco__letter--incorrect",
      "rosco__letter--pasapalabra"
    )
  );
};

const renderGameStateUI = (gameState) => {
  const gameStateModiifiers = ["start", "rules", "play", "ranking", "end"];
  const mainDomElements = document.getElementsByTagName("main")[0].children;
  Array.from(mainDomElements).forEach((element) => {
    const classesToRemove = gameStateModiifiers
      .filter((gameStateModifier) => gameState !== gameStateModifier)
      .map((classModifier) => `${element.classList[0]}--${classModifier}`);
    setElementStyle(element.id, [`${element.classList[0]}--${gameState}`], classesToRemove);
  });
};

const game = new Game(
  questionsSpanish,
  "answerInput",
  "messageWrapper",
  "errorsWrapper",
  "playerName",
  "gameId",
  "hits"
);

game.setGameState("start");
