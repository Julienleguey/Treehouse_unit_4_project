class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

//methods

  addPhraseToDisplay() {
    this.phrase = getRandomPhrase();
    this.phrase.forEach (character => document.querySelector('#phrase ul').insertAdjacentHTML('beforeend', character));
  }




}
