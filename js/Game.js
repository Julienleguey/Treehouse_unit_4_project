class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('bla ble bli'),
      new Phrase('bla bla bla')
    ];
  }

  // methods
  getRandomPhrase() {
    let phraser = [];
    const ranNum = parseInt(Math.random()*2);
    this.phrases[ranNum].split('').map(letter => {
      const regex = /^\w$/;
      if (regex.test(letter)) {
        phraser.push(`<li class="hide letter ${letter}">${letter}</li>`);
      } else {
        phraser.push(`<li class="hide space"> </li>`);
      }
    });
    return phraser;
  }

}
