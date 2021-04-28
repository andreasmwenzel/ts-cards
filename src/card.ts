import { Deck } from './deck';
import { Rank } from './rank';
import { Suit } from './suit';

export class Card {
  public readonly suit: Suit;
  public readonly rank: Rank;
  public readonly deck?: Deck | null;
  public readonly description: string;
  constructor(suit: Suit, rank: Rank, deck?: Deck) {
    this.suit = suit;
    this.rank = rank;
    this.description = `${this.rank.name} of ${this.suit.name}`;
    this.deck = deck;
  }
}
