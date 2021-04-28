import { Rank, Suit, Card } from '../../index';

describe('new card', () => {
  test('ace of spades', () => {
    const ace: Rank = new Rank('A');
    const spades: Suit = new Suit('spades');
    const aceOfSpades = new Card(spades, ace);

    expect(aceOfSpades).toHaveProperty('rank', ace);
    expect(aceOfSpades.rank.name).toBe('A');
    expect(aceOfSpades).toHaveProperty('suit', spades);
    expect(aceOfSpades.suit.name).toBe('spades');
  });
});

// TODO: make card compare tests
