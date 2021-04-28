import { Deck } from '../deck';
import { Card } from '../card';
import { nine, ten, jack, queen, king, ace } from '../ranks';
import { spades, diamonds, clubs, hearts } from '../suits';

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

export const pinochleRankValues = {
  nine: 9,
  jack: 10,
  queen: 11,
  king: 12,
  ten: 13,
  ace: 14,
};
