import { cardDeck, shuffleDeck } from "../entity/cardDeck";
import { getArrayItems } from "../utils/arrayItems";

const RenderMagicCardList = () => {
  const magicDeck = getArrayItems(shuffleDeck(cardDeck));
  const firstCardPile = magicDeck.slice(0, 7);
  const secondCardPile = magicDeck.slice(7, 14);
  const thirdCardPile = magicDeck.slice(14, 22);

  return (
    <div className="container">
      <div className="pile__container">
        <h2>Row 1</h2>
        {firstCardPile.map(({ suit, value }) => (
          <div className="card" key={`${value} ${suit}`}>
            {value}-{suit}
          </div>
        ))}
      </div>

      <div className="pile__container">
        <h2>Row 2</h2>
        {secondCardPile.map(({ suit, value }) => (
          <div className="card" key={`${value} ${suit}`}>
            {value}-{suit}
          </div>
        ))}
      </div>

      <div className="pile__container">
        <h2>Row 3</h2>
        {thirdCardPile.map(({ suit, value }) => (
          <div className="card" key={`${value} ${suit}`}>
            {value}-{suit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderMagicCardList;
