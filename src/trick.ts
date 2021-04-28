import { Card } from './card';
import { Suit } from './suit';

export class Trick {
  private leadSuit;
  private trumpSuit;
  public cards: Card[] = [];
  private compareCards: (a: Card, b: Card, ledSuit?: Suit, trump?: Suit) => number;

  constructor(card: Card, cardCompare: (a: Card, b: Card, leadSuit?: Suit, trump?: Suit) => number, trump?: Suit) {
    this.leadSuit = card.suit;
    this.trumpSuit = trump;
    this.compareCards = cardCompare;
    this.cards.push(card);
  }

  addCard(card: Card) {
    this.cards.push(card);
    this.cards.sort((a: Card, b: Card) => {
      return this.compareCards(a, b, this.leadSuit, this.trumpSuit);
    });
  }

  public get winner() {
    return this.cards[0];
  }
  public get length() {
    return this.cards.length;
  }
  public get suit() {
    return this.leadSuit;
  }
}
