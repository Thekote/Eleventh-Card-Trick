import { cardDeck, shuffleDeck, getFirst21Items } from "../utils/cardHandler";
const CardsList = () => {
  const shuffledDeck = shuffleDeck(cardDeck);
  const first21ShuffledCards = getFirst21Items(shuffledDeck);
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
