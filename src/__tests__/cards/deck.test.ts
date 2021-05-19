import { Card } from '../../card';
import { Deck, standardRankValues, two, three } from '../../index';

describe('Deck', () => {
  const deck = new Deck();
  test('fresh deck', () => {
    expect(deck.totalLength).toBe(0);
  });
});

describe('rank values', () => {
  test('2 smaller than 3', () => {
    expect(standardRankValues.get(three)).toBe(3);
    expect(standardRankValues.get(two)).toBe(2);
  });
});
