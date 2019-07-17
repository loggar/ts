var CardSuit;
(function(CardSuit) {
  CardSuit[(CardSuit["Clubs"] = 0)] = "Clubs";
  CardSuit[(CardSuit["Diamonds"] = 1)] = "Diamonds";
  CardSuit[(CardSuit["Hearts"] = 2)] = "Hearts";
  CardSuit[(CardSuit["Spades"] = 3)] = "Spades";
})(CardSuit || (CardSuit = {}));

/**
 * Which results in the following object:
 * {
 *   0: "Clubs",
 *   1: "Diamonds",
 *   2: "Hearts",
 *   3: "Spades",
 *   Clubs: 0,
 *   Diamonds: 1,
 *   Hearts: 2,
 *   Spades: 3
 * }
 */
