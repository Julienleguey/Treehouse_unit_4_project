// const phrases = [
//   'bla ble bli',
//   'bla bla bla'
// ];
//
// //sélection de la phrase
// function getRandomPhrase() {
//   let phraser = [];
//   const ranNum = parseInt(Math.random()*2);
//   phrases[ranNum].split('').map(letter => {
//     const regex = /^\w$/;
//     if (regex.test(letter)) {
//       phraser.push(`<li class="hide letter ${letter}">${letter}</li>`);
//     } else {
//       phraser.push(`<li class="hide space"> </li>`);
//     }
//   });
//   return phraser;
// }
//
//
// //append every single li to the ul
// function addPhraseToDisplay() {
//   let phrase = getRandomPhrase();
//   phrase.forEach (character => document.querySelector('#phrase ul').insertAdjacentHTML('beforeend', character));
// }



// starting the game
document.getElementById('btn__reset').addEventListener('click', function () {
  document.getElementById('overlay').style.display = 'none';
  phrase.addPhraseToDisplay();
  console.log('it works in app.js');
});
