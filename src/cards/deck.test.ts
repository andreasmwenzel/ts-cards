import { Card, Deck } from "../index";;

describe("Deck", () => {
  const deck = new Deck();
  test("fresh deck", () => {
    expect(deck.totalLength).toBe(0);
  });
});
