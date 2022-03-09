import { cardDeck, shuffleDeck } from "../entity/cardDeck";
import { getArrayItems } from "../utils/arrayItems";
const CardsList = () => {
  const shuffledDeck = shuffleDeck(cardDeck);
  const first21ShuffledCards = getArrayItems(shuffledDeck);
  return (
    <ul>
      {first21ShuffledCards.map((card) => (
        <li key={`${card.value} ${card.suit}`} className="card">
          <span>
            {card.value}-{card.suit}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
