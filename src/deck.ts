import { Card } from './card';

export class Deck {
  cards: Card[] = [];
  drawPile: Card[] = [];

  constructor(cards: Card[] = []) {
    for (const card of cards) {
      this.cards.push(card);
    }
  }

  get totalLength() {
    return this.cards.length;
  }

  get remainingLength() {
    return this.drawPile.length;
  }

  shuffleDrawPile() {
    shuffle(this.drawPile);
  }

  // shuffles the whole deck and creates the draw pile
  shuffle() {
    this.drawPile.length = 0;
    this.drawPile.push(...this.cards);
    this.shuffleDrawPile();
  }

  draw(count: number = 1): Card[] {
    if (!this.drawPile.length) {
      throw new Error('Deck: Cannot draw from deck, no cards remaining');
    }
    if (count < 0) {
      return [];
    }
    const cards = this.drawPile.splice(0, count);

    return cards;
  }
}

function shuffle(array: any[]) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
