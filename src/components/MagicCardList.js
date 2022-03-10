import { useState } from "react";
import { cardDeck, shuffleDeck } from "../entity/cardDeck";
import { getArrayItems } from "../utils/arrayItems";
import { magicTrick } from "../utils/magicTrick";

const RenderMagicCardList = () => {
  const [magicDeck, setMagicDeck] = useState(() => {
    const x = getArrayItems(shuffleDeck(cardDeck));
    const firstCardPile = x.slice(0, 7);
    const secondCardPile = x.slice(7, 14);
    const thirdCardPile = x.slice(14, 22);

    return [firstCardPile, secondCardPile, thirdCardPile];
  });

  return (
    <div className="container">
      {magicDeck.map((entry, index) => {
        return (
          <div className="pile__container">
            <h2>Row {index + 1}</h2>
            {entry.map(({ suit, value }) => (
              <div className="card" key={`${value} ${suit}`}>
                {value}-{suit}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default RenderMagicCardList;
