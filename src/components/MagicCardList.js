import { useState } from "react";
import { cardDeck, shuffleDeck } from "../entity/cardDeck";
import { getArrayItems } from "../utils/arrayItems";
import { reduceArray } from "../utils/reduceArray";
import { sliceArray } from "../utils/sliceArray";

const makeMagicDeck = getArrayItems(shuffleDeck(cardDeck));
const initalDeckState = sliceArray(makeMagicDeck);

const RenderMagicCardList = () => {
  const [magicDeck, setMagicDeck] = useState(initalDeckState);

  function handleClick(rowIndex) {
    const updatedDeck = reduceArray(magicDeck, rowIndex);
    setMagicDeck(updatedDeck);
  }

  return (
    <div className="container">
      {magicDeck.map((entry, rowIndex) => {
        return (
          <div className="pile__container" key={`card_pile_${rowIndex}`}>
            <button
              onClick={() => {
                handleClick(rowIndex);
              }}
            >
              My Card is Here!
            </button>
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
