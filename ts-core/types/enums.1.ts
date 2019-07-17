enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

let card = CardSuit.Clubs;

card = "not a card suit"; /* Error! Type '"not a card suit"' 
is not assignable to type 'CardSuit'. */
