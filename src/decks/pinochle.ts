import { Deck } from '../deck';
import { Card } from '../card';
import { nine, ten, jack, queen, king, ace } from '../ranks';
import { spades, diamonds, clubs, hearts } from '../suits';
import { Suit } from "../suit"
import { Rank } from "../rank"

/**
 * @class PinochelDeck
 * @extends Deck
 */
export class PinochleDeck extends Deck {
  constructor() {
    super(generateDeck());
  }
}

const suits = [spades, diamonds, clubs, hearts];
const ranks = [nine, jack, queen, king, ten, ace];

const generateDeck = () => {
  const cards: Card[] = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      cards.push(new Card(suit, rank, this));
      cards.push(new Card(suit, rank, this));
    }
  }

  return cards;
};

const pinochleRankValues = new Map<Rank, number>();
pinochleRankValues.set(nine, 9);
pinochleRankValues.set(jack, 10);
pinochleRankValues.set(queen, 11);
pinochleRankValues.set(king, 12);
pinochleRankValues.set(ten, 13);
pinochleRankValues.set(ace, 14);

export const pinochleCardCompare = (a: Card, b: Card, leadSuit: Suit | undefined, trump : Suit | undefined): number => {
  const bRank: number | undefined = pinochleRankValues.get(b.rank);
  const aRank: number | undefined = pinochleRankValues.get(a.rank);
  if (a.suit === b.suit) {
    return (bRank ? bRank : 0) - (aRank ? aRank : 0);
  } else {
    if(b.suit === trump){
      return 1;
    } else if(a.suit === trump){
      return -1;
    }
    else if (b.suit === leadSuit) {
      return 1;
    } else {
      return -1;
    }
  }
};