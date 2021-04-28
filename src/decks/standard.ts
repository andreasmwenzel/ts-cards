import { Deck } from '../deck';
import { Card } from '../card';
import { two, three, four, five, six, seven, eight, nine, ten, jack, queen, king, ace } from '../ranks';
import { spades, diamonds, clubs, hearts } from '../suits';
import { Rank } from '../rank';
import { Suit } from '../suit';

/**
 * @class PinochelDeck
 * @extends Deck
 */
export class StandardDeck extends Deck {
  constructor() {
    super(generateDeck());
  }
}

const suits = [spades, diamonds, clubs, hearts];
const ranks = [two, three, four, five, six, seven, eight, nine, ten, jack, queen, king, ace];

const generateDeck = () => {
  const cards: Card[] = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      cards.push(new Card(suit, rank, this));
    }
  }

  return cards;
};

const standardRankValues = new Map<Rank, number>();
standardRankValues.set(two, 2);
standardRankValues.set(three, 3);
standardRankValues.set(four, 4);
standardRankValues.set(five, 5);
standardRankValues.set(six, 6);
standardRankValues.set(seven, 7);
standardRankValues.set(eight, 8);
standardRankValues.set(nine, 9);
standardRankValues.set(ten, 10);
standardRankValues.set(jack, 11);
standardRankValues.set(queen, 12);
standardRankValues.set(king, 13);
standardRankValues.set(ace, 14);


export const standardCardCompare = (a: Card, b: Card, leadSuit: Suit | undefined, trump : Suit | undefined): number => {
  const bRank: number | undefined = standardRankValues.get(b.rank);
  const aRank: number | undefined = standardRankValues.get(a.rank);
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
