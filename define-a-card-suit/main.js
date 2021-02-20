/* 
You get any card as an argument. Your task is to return a suit of this card.

Our deck (is preloaded):

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
  let newCard = card.split('')
  if (newCard[1] === '0') {
    if (newCard[2] === '♠') {
      return 'spades'
    } else if (newCard[2] === '♦') {
      return 'diamonds'
    } else if (newCard[2] === '♥') {
      return 'hearts'
    } else if (newCard[2] === '♣') {
      return 'clubs'
    }
  } else if (newCard[1] === '♠') {
    return 'spades'
  } else if (newCard[1] === '♦') {
    return 'diamonds'
  } else if (newCard[1] === '♥') {
    return 'hearts'
  } else if (newCard[1] === '♣') {
    return 'clubs'
  }
}