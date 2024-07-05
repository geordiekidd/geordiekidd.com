// code modified from: https://stackoverflow.com/a/75828349
const subHeads = [
  "Guten Tag!", // German
  "Olá!", // Pportuguese
  "Xin chào!", // Vietnamese
  "!مرحبًا", // Arabic
  "Kaixo!", // Basque
  "Cześć!", // Polish
  "নমস্কার!", // Bengali
  "Zdravo!", // Bosnian
  "Halo!", // Indonesian
  "Sannu!", // Hausa
  "こんにちは!", // Japanese
  "Ndewo!", // Igbo
  "Kia ora!", // Maori
  "Muraho!", // Kinyarwanda
  "ሰላም!", // Amharic
  "Вітаю!", // Ukrainian
  "Hei!", // Finnish
  "Γειά σου!", // Greek
  "Manao ahoana!", // Malagasy
  "Hello!", // English * NOTE: Must be the same as the text in HTML div
];
let displayIdx = 0;

setInterval(() => {
  document.querySelector(".cyclic").innerHTML = subHeads[displayIdx];
  displayIdx += 1;
  if (displayIdx >= subHeads.length) {
    displayIdx = 0;
  }
}, 1500);