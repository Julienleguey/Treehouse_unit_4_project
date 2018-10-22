class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
  }


// creating the phrases
  createPhrases() {
    const phrases = [
      new Phrase('bla ble bli'),
      new Phrase('bla bla bla')
    ];
    return phrases;
  }


  //selecting the phrase and creating an array with every single character as an object
  getRandomPhrase() {
    let phrase;
    const ranNum = parseInt(Math.random()*2);
    return phrase = game.phrases[ranNum];
  }



}
