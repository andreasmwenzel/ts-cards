import { Deck } from '../deck';
import { Card, Rank, Suit, RankValues } from '../card';

/**
 * @class PinochelDeck
 * @extends Deck
 */
export class StandardDeck extends Deck {
  constructor() {
    super(generateDeck());
  }
}

const suits: Suit[] = ['spades', 'hearts', 'diamonds', 'clubs'];
const ranks: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const generateDeck = () => {
  const cards: Card[] = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      cards.push(new Card(suit, rank, this));
    }
  }

  return cards;
};

export let defaultRankValue: RankValues = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 3,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};