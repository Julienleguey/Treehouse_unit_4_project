class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

//methods

  addPhraseToDisplay() {
    console.log('it works in phrase.js');
    this.phrase = game.getRandomPhrase();
    phrase.forEach (character => document.querySelector('#phrase ul').insertAdjacentHTML('beforeend', character));
  }




}
