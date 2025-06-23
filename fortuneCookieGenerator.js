import { openingPhrase, predications, luckyItems } from "./MessageData.js";

function fortuneGenerator() {
  const emojis = ["🔮", "✨", "🍀", "📜", "🌠"];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const opening =
    openingPhrase[Math.floor(Math.random() * openingPhrase.length)];
  const middle = predications[Math.floor(Math.random() * predications.length)];
  const end = luckyItems[Math.floor(Math.random() * luckyItems.length)];

  return `\n${emoji} ${opening} ${middle} ${capitalize(end)}\n`;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(fortuneGenerator());
