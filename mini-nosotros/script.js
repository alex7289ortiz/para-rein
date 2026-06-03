const inheritanceCards = [
  {
    title: "Si hereda tu carácter de Aries",
    text: "Si hereda tu carácter de Aries, amor... ya me veo negociando con una mini jefa que va a decir 'no' con autoridad incluso antes de aprender a hablar. Y lo peor es que seguro me va a mirar igual que vos, y ahí voy a perder toda autoridad. 😅❤️",
  },
  {
    title: "Si hereda mi corazón de Cáncer",
    text: "Si hereda mi corazón de Cáncer, va a ser sensible, intenso y medio dramático bonito. De esos que aman fuerte, se encariñan profundo y hacen berrinche con sentimiento. Básicamente: ternura con tormenta incluida. 🌙",
  },
  {
    title: "Si hereda tu mirada",
    text: "Si hereda tu mirada, estoy perdido. Porque una sola carita me va a convencer de todo. Si vos ya me haces débil con esa mirada, imaginate una mini versión tuya pidiéndome algo. 😮‍💨❤️",
  },
  {
    title: "Si hereda mi forma de amarte",
    text: "Si hereda mi forma de amar, va a cuidar con todo el corazón. Tal vez sea intenso, sí, pero de esos intensos que no abandonan, que protegen, que se quedan cuando algo vale la pena. ❤️",
  },
  {
    title: "Si hereda tu fuego",
    text: "Si hereda tu fuego, va a tener esa energía tuya que no pide permiso para brillar. Va a ser valiente, directa, terca y hermosa en su manera de hacerse sentir. Y yo, obviamente, voy a fingir que mando en la casa. 😅🔥",
  },
  {
    title: "Si hereda mi sensibilidad",
    text: "Si hereda mi sensibilidad, va a notar cuando alguien está triste, va a guardar recuerdos pequeños y va a amar con una profundidad que no todos entienden. Capaz llore por una película, por una canción o porque su mamá se vea demasiado bonita. 🥹",
  },
  {
    title: "Si sale igualita a vos",
    text: "Si sale igualita a vos, tengo que prepararme psicológicamente. Porque una Reina ya me tiene loco... dos Reinas podrían conquistar el mundo y dejarme encargado de cargar las bolsas. 😅❤️",
  },
  {
    title: "Si sale igualito a mí",
    text: "Si sale igualito a mí, seguro va a mirarte como si fueras su mundo entero. Porque eso sí quisiera que lo herede de mí: la forma de verte como alguien única. 🥹",
  },
  {
    title: "Si hereda tu sonrisa",
    text: "Si hereda tu sonrisa, va a tener una ventaja injusta en la vida. Yo voy a intentar educar con firmeza, pero si sonríe como vos... caso perdido. 😍",
  },
  {
    title: "Si hereda mi romanticismo",
    text: "Si hereda mi lado romántico, pobre criatura. Va a escribir cartas, mirar el cielo, guardar frases raras y decir cosas profundas en momentos inesperados. Poeta con peligro emocional, como su papá. 😅🌙",
  },
  {
    title: "Si hereda tu terquedad",
    text: "Si hereda tu terquedad, va a defender sus ideas con fuego. Y aunque a veces me saque canas verdes, también voy a admirar que tenga esa fuerza tuya para no dejarse apagar por nadie. 🔥",
  },
  {
    title: "Si hereda mi paciencia",
    text: "Si hereda mi paciencia, tal vez equilibre un poquito tu fuego de Aries. Aunque siendo sinceros... con una mamá como vos, la paciencia va a tener entrenamiento diario. 😌",
  },
  {
    title: "Si hereda nuestras fechas",
    text: "Vos naciste un 19 de abril. Yo nací un 19 de julio. Capaz la vida ya estaba jugando con el número 19 antes de que nosotros entendiéramos algo. Hay coincidencias que parecen tener corazón. ❤️",
  },
  {
    title: "Si hereda lo mejor de los dos",
    text: "Si hereda lo mejor de los dos, será puro amor con carácter. Un corazoncito fuerte, noble, tierno, intenso, terco y lleno de vida. Una mezcla de fuego y agua... difícil de explicar, imposible de no amar. ❤️🔥🌙",
  },
];

const predictions = [
  "Tendría carácter para conquistar el mundo... y sensibilidad para llorar cuando se encariñe con un perrito.",
  "Sería valiente como vos, Reina, pero con esa manía mía de guardar recuerdos como si fueran tesoros.",
  "Tendría fuego para empezar aventuras y agua para sentirlas profundo.",
  "Probablemente sería terco, amoroso, dramático, dulce y peligrosamente adorable.",
  "En resumen: una personita difícil de regañar, fácil de amar e imposible de ignorar.",
];

const inheritanceResults = [
  "Heredó tu carácter de Aries y mi paciencia de Cáncer. Resultado: yo perdiendo discusiones desde el día uno. 😅",
  "Heredó tu mirada y mi romanticismo. Resultado: manipulación emocional nivel ternura máxima. ❤️",
  "Heredó tu fuego y mi sensibilidad. Resultado: una personita intensa, dulce y peligrosamente adorable. 🔥🌙",
  "Heredó tu sonrisa y mi forma de pensar. Resultado: encanto con teorías raras incluidas. 😌",
  "Heredó tu belleza y mi corazón. Resultado: oficialmente voy a ser el papá más débil del mundo. 🥹",
  "Heredó tu energía de Aries y mi alma de Cáncer. Resultado: fuego con agua, tormenta bonita asegurada. ❤️",
  "Heredó tu terquedad y mi intensidad. Resultado: una criatura que va a ganar discusiones con argumentos y carita tierna. 😅",
  "Heredó tu forma de mandar y mi forma de consentir. Resultado: yo diciendo 'no' y terminando en 'bueno, pero solo esta vez'. 😮‍💨",
  "Heredó tu risa y mi memoria emocional. Resultado: va a recordar todo, especialmente cuando le convenga. 😂",
  "Heredó tu fuego, mi luna y nuestro amor. Resultado: una historia que todavía no existe, pero ya se siente bonita. ❤️",
  "Heredó tu lado travieso y mi lado romántico. Resultado: peligro emocional con sonrisa incluida. 😏",
  "Heredó tu orgullo de Aries y mi sensibilidad de Cáncer. Resultado: fuerte por fuera, blandito por dentro. 🥹",
  "Heredó tu impulso y mi tendencia a pensar demasiado. Resultado: primero actúa, después analiza, y al final me culpa a mí. 😅",
  "Heredó tu manera de brillar y mi manera de cuidar. Resultado: una personita con luz propia y corazón protegido. ❤️",
  "Heredó el número 19 de los dos. Resultado: destino haciendo de las suyas otra vez. ✨",
];

const lookResults = [
  "Se parece a Reina cuando quiere mandar... y a Alexander cuando quiere hacerse el sentimental. 😅",
  "Tiene la mirada de Reina y el corazón de Alexander. Peligroso equilibrio. ❤️",
  "Tiene el carácter de mamá y la ternura de papá. O sea: gana todas las discusiones y después abraza.",
  "Se parece a Reina cuando sonríe y a Alexander cuando se pone intenso. Combinación de novela. 😌",
  "Tiene fuego de Aries y luna de Cáncer. Nadie sabe si va a conquistar el mundo o escribirle una carta.",
  "Se parece a los dos: bello caos con apellido emocional. ❤️",
  "Heredó lo más peligroso: la mirada de ella y las palabras de él.",
  "Tiene cara de inocente, pero con esa mezcla de Aries y Cáncer... yo no confiaría demasiado. 😅",
];

const secretNames = [
  "Mini Reina del Drama Bonito",
  "Pequeño Fuego Lunar",
  "Terremotito de Amor",
  "Mini Jefecita del Corazón",
  "Bebé Tormenta Bonita",
  "Corazoncito Aries-Cáncer",
  "Mini Caos Adorable",
  "Pedacito de Nosotros",
  "Chispita Morales Ortiz",
  "Lunita de Fuego",
];

const clauses = [
  "Reina tendrá derecho a decir: 'Te dije' cada vez que el bebé saque mi lado dramático.",
  "Alexander tendrá derecho a consentir en secreto, pero deberá fingir firmeza cuando Reina lo mire.",
  "Si el bebé hereda la mirada de Reina, queda oficialmente prohibido culparme por ceder.",
  "Si hereda el corazón de Alexander, Reina deberá abrazarlo fuerte cuando se ponga sentimental.",
  "Si hereda el carácter de Aries, ambos aceptamos que habrá negociaciones diplomáticas en casa.",
  "Si hereda lo mejor de los dos, prometemos cuidarlo con amor, paciencia y muchas risas.",
];

const futureMessages = [
  "Hola mamá Reina, hola papá Alexander. Todavía no existo, pero si algún día llego, prometo heredar lo bonito de los dos... y usarlo para salirme con la mía. 😅",
  "Mamá, dicen que sos Aries. Papá, dicen que sos Cáncer. Yo solo espero heredar el amor, porque con eso ya voy a tener bastante.",
  "Si algún día llego, quiero que me cuenten cómo empezó esta historia. Aunque sospecho que papá va a exagerar la parte romántica. 😌",
  "Mamá, seguro voy a tener tu carácter. Papá, seguro voy a tener tu corazón. Así que prepárense: voy a ser fuerte y sensible a la vez.",
  "Todavía soy una idea bonita, pero me gusta imaginar que nací de dos personas que se eligieron con amor.",
];

const particleSymbols = ["❤", "✦", "☾", "♡", "✧"];

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function renderCards() {
  const cardContainer = document.querySelector("#inheritanceCards");

  inheritanceCards.forEach((card, index) => {
    const article = document.createElement("article");
    article.className = "story-card";

    const button = document.createElement("button");
    button.className = "card-toggle";
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", `card-${index}`);
    button.innerHTML = `<h3>${card.title}</h3><span aria-hidden="true">+</span>`;

    const body = document.createElement("div");
    body.className = "card-body";
    body.id = `card-${index}`;
    body.innerHTML = `<p>${card.text}</p>`;

    button.addEventListener("click", () => {
      const isOpen = article.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });

    article.append(button, body);
    cardContainer.append(article);
  });
}

function renderPredictions() {
  const predictionContainer = document.querySelector("#predictionCards");
  predictions.forEach((prediction) => {
    const card = document.createElement("article");
    card.className = "prediction-card";
    card.textContent = prediction;
    predictionContainer.append(card);
  });
}

function renderContract() {
  const list = document.querySelector("#contractClauses");
  clauses.forEach((clause) => {
    const item = document.createElement("li");
    item.textContent = clause;
    list.append(item);
  });
}

function launchParticles(amount = 22) {
  const layer = document.querySelector("#burstLayer");
  const isSmallScreen = window.matchMedia("(max-width: 540px)").matches;
  const particleCount = isSmallScreen ? Math.min(amount, 16) : amount;

  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement("span");
    particle.className = "burst-particle";
    particle.textContent = getRandomItem(particleSymbols);
    particle.style.setProperty("--x", `${Math.random() * 100}vw`);
    particle.style.setProperty("--size", `${Math.random() * 0.8 + 0.9}rem`);
    particle.style.setProperty("--duration", `${Math.random() * 1.6 + 2.4}s`);
    layer.append(particle);
    particle.addEventListener("animationend", () => particle.remove());
  }
}

function animateResultText(element, text) {
  element.textContent = text;
  element.classList.remove("is-changing");
  void element.offsetWidth;
  element.classList.add("is-changing");
}

function setupRoulette({ buttonId, resultId, spinnerId, results, burstAmount }) {
  const button = document.querySelector(buttonId);
  const result = document.querySelector(resultId);
  const spinner = document.querySelector(spinnerId);

  button.addEventListener("click", () => {
    if (button.disabled) return;

    let turns = 0;
    const totalTurns = 12 + Math.floor(Math.random() * 7);
    button.disabled = true;
    spinner.classList.add("is-spinning");

    const interval = window.setInterval(() => {
      turns += 1;
      animateResultText(result, getRandomItem(results));

      if (turns >= totalTurns) {
        window.clearInterval(interval);
        spinner.classList.remove("is-spinning");
        animateResultText(result, getRandomItem(results));
        button.disabled = false;
        launchParticles(burstAmount);
      }
    }, 92);
  });
}

function setupOpening() {
  const openButton = document.querySelector("#openFutureButton");
  const openingScreen = document.querySelector("#openingScreen");
  const introScreen = document.querySelector("#intro");

  openButton.addEventListener("click", () => {
    openingScreen.classList.add("is-leaving");

    window.setTimeout(() => {
      openingScreen.classList.add("is-hidden");
      introScreen.classList.remove("is-hidden");
      introScreen.classList.add("is-revealing");

      window.requestAnimationFrame(() => {
        introScreen.classList.remove("is-revealing");
        introScreen.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      launchParticles(14);
    }, 360);
  });
}

function setupIntro() {
  const startButton = document.querySelector("#startButton");
  const mainContent = document.querySelector("#mainContent");

  startButton.addEventListener("click", () => {
    mainContent.classList.remove("is-hidden");
    mainContent.classList.add("is-revealing");

    window.requestAnimationFrame(() => {
      mainContent.classList.remove("is-revealing");
      mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    launchParticles(18);
  });
}

function setupSecretMessage() {
  const button = document.querySelector("#secretButton");
  const message = document.querySelector("#secretMessage");

  button.addEventListener("click", () => {
    message.hidden = false;
    message.classList.remove("is-revealed");
    void message.offsetWidth;
    message.classList.add("is-revealed");
    button.textContent = "Mensaje abierto para Reina";
    launchParticles(12);
  });
}

function setupFutureMessage() {
  const button = document.querySelector("#futureButton");
  const message = document.querySelector("#futureMessage");

  button.addEventListener("click", () => {
    animateResultText(message, getRandomItem(futureMessages));
    launchParticles(14);
  });
}

function setupSaveButton() {
  const button = document.querySelector("#saveButton");
  const note = document.querySelector("#savedNote");

  button.addEventListener("click", () => {
    try {
      localStorage.setItem("mini-nosotros-promesa", "Promesa guardada para Reina");
    } catch {
      // The message still appears even if private browsing blocks storage.
    }

    note.textContent = "Promesa guardada en el corazón de Alexander para Reina. ❤️";
    launchParticles(34);
  });
}

renderCards();
renderPredictions();
renderContract();
setupOpening();
setupIntro();
setupFutureMessage();
setupSecretMessage();
setupSaveButton();
setupRoulette({
  buttonId: "#spinInheritance",
  resultId: "#inheritanceResult",
  spinnerId: "#inheritanceSpinner",
  results: inheritanceResults,
  burstAmount: 28,
});
setupRoulette({
  buttonId: "#spinLook",
  resultId: "#lookResult",
  spinnerId: "#lookSpinner",
  results: lookResults,
  burstAmount: 20,
});
setupRoulette({
  buttonId: "#spinName",
  resultId: "#nameResult",
  spinnerId: "#nameSpinner",
  results: secretNames,
  burstAmount: 20,
});
