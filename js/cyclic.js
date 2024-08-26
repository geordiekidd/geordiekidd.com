// code modified from: https://stackoverflow.com/a/75828349
const subHeads = [
  "Guten Tag!", // German
  "Olá!", // Pportuguese
  "Xin chào!", // Vietnamese
  "!مرحبًا", // Arabic
  "Murḥaban!", // Arabic (roman)
  "Kaixo!", // Basque
  "Cześć!", // Polish
  //"নমস্কার!", // Bengali
  "नमस्ते!", // Sanskrit
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



// code modified from: https://codepen.io/josephwong2004/pen/ExgoKde?editors=1010
// var ctext = [
//   {text: "Hello"}, // English
//   {text: "Guten Tag"}, // German
//   {text: "Olá"}, // Pportuguese
//   {text: "Xin chào"}, // Vietnamese
//   // {text: "مرحبًا"}, // Arabic
//   {text: "Marh\u0323aban" }, // Arabic (roman) -- ḥ doesn't work in Safari
//   {text: "Kaixo"}, // Basque
//   {text: "Cześć"}, // Polish
//   // {text: "নমস্কার"}, // Bengali
//   // {text: "नमस्ते"}, // Sanskrit
//   {text: "\u{928}\u{92E}\u{938}\u{94D}\u{924}\u{947}"}, // Sanskrit (unicode)
//   {text: "Zdravo"}, // Bosnian
//   {text: "Halo"}, // Indonesian
//   {text: "Sannu"}, // Hausa
//   {text: "こんにちは"}, // Japanese
//   {text: "Ndewo"}, // Igbo
//   {text: "Kia ora"}, // Maori
//   {text: "Muraho"}, // Kinyarwanda
//   {text: "ሰላም"}, // Amharic
//   {text: "Вітаю"}, // Ukrainian
//   {text: "Hei"}, // Finnish
//   {text: "Γειά σου"}, // Greek
//   {text: "Manao ahoana"}, // Malagasy
// ];

// $(document).ready(async function() {
//   carousel(ctext, "#feature-text")
// });

// function waitForMs(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

// async function typeSentence(sentence, eleRef, delay = 50) {
//   const letters = sentence.split("");
//   let i = 0;
//   while(i < letters.length) {
//     await waitForMs(delay);
//     $(eleRef).append(letters[i]);
//     i++
//   }
//   return;
// }

// async function deleteSentence(eleRef) {
//   const sentence = $(eleRef).html();
//   const letters = sentence.split("");
//   let i = 0;
//   while(letters.length > 0) {
//     await waitForMs(50);
//     letters.pop();
//     $(eleRef).html(letters.join(""));
//   }
// }

// async function carousel(carouselList, eleRef) {
//     var i = 0;
//     while(true) {
//       await typeSentence(carouselList[i].text, eleRef);
//       await waitForMs(2000);
//       await deleteSentence(eleRef);
//       await waitForMs(50);
//       i++
//       if(i >= carouselList.length) {i = 0;}
//     }
// }