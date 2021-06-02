# Cards in Typescript

This is an adaptation of the [cards](https://www.npmjs.com/package/cards) library, converted to typescript.

## Install

```
$ npm install ts-cards
```

## Example

```
import {Card, StandardDeck} from 'ts-cards'

const deck = new StandardDeck();
deck.suffle();

const hand = deck.draw(5);
```
