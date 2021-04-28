import { Card, Trick, diamonds, spades, clubs, ace, queen, two, standardCardCompare, Suit } from '../../index';

const aceOfSpades = new Card(spades, ace);
const queenOfDiamonds1 = new Card(diamonds, queen);
const twoOfClubs = new Card(clubs, two);
const queenOfDiamonds2 = new Card(diamonds, queen);

let trick: Trick;
let trickWihTrump : Trick;

describe('trick without trump', () => {
  test('create a new Trick', () => {
    trick = new Trick(aceOfSpades, standardCardCompare);
    expect(trick.length).toBe(1);
    expect(trick.winner).toBe(aceOfSpades);
    expect(trick.suit).toBe(spades);
  });

  test('add to existing trick', () => {
    trick.addCard(queenOfDiamonds1);
    expect(trick.length).toBe(2);
    expect(trick.winner).toBe(aceOfSpades);
    expect(trick.suit).toBe(spades);
  });
});

describe('trick with trump', () => {
  test('create a new Trick', () => {
    trickWihTrump = new Trick(queenOfDiamonds1, standardCardCompare, clubs);
    expect(trickWihTrump.length).toBe(1);
    expect(trickWihTrump.winner).toBe(queenOfDiamonds1);
    expect(trickWihTrump.suit).toBe(queenOfDiamonds1.suit);
  });

  test('add to existing trick', () => {
    trickWihTrump.addCard(aceOfSpades);
    trickWihTrump.addCard(queenOfDiamonds2);
    expect(trickWihTrump.winner).toStrictEqual(queenOfDiamonds1); // the first queen of diamonds is the current winning card
    trickWihTrump.addCard(twoOfClubs);
    expect(trickWihTrump.length).toBe(4);
    expect(trickWihTrump.winner).toBe(twoOfClubs); // the 2 of clubs wins as trump
    expect(trickWihTrump.suit).toBe(queenOfDiamonds1.suit); // but the trick "suit" is still diamonds
  });
});
