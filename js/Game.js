class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('bla ble bli'),
      new Phrase('bla bla bla')
    ];
  }

  // methods

  //selecting the phrase and creating an array with every single character as an object
  getRandomPhrase() {
    let phrase = [];
    const ranNum = parseInt(Math.random()*2);
    this.phrases[ranNum].split('').map(letter => {
      const regex = /^\w$/;
      if (regex.test(letter)) {
        phrase.push(`<li class="hide letter ${letter}">${letter}</li>`);
      } else {
        phrase.push(`<li class="hide space"> </li>`);
      }
    });
    return phrase;
  }

}
