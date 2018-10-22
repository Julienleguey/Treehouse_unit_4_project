class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

//methods

  addPhraseToDisplay() {
    // creating an empty array which will contains the splited phrase
    const phraseSplited = [];

    // spliting the phrase : each character/space is pushed in the array with the HTML for the li and the according css classes
    this.phrase.split('').map(letter => {
      const regex = /^\w$/;
      if (regex.test(letter)) {
        phraseSplited.push(`<li class="hide letter ${letter}">${letter}</li>`);
      } else {
        phraseSplited.push(`<li class="hide space"> </li>`);
      }
    });

    // displaying each character in the ul
    phraseSplited.forEach(character => document.querySelector('#phrase ul').insertAdjacentHTML('beforeend', character));
  }












}
