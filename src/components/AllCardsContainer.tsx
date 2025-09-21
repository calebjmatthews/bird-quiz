import { useMemo } from "react";

import BirdCard from "./BirdCard";
import ArrowIcon from "./icons/arrow";
import birds from "../data/birds";
import Bird from "../data/bird";
import { GAME_MODES } from "../data/enums";

function AllCardsContainer(props: {
  setMode: (value: React.SetStateAction<GAME_MODES | null>) => void
}) {
  const { setMode } = props;
  const groupedBirds = useMemo(() => {
    const nextBirds: { [order: string]: { [family: string] : Bird[] } } = {};

    birds.forEach((bird) => {
      if (!nextBirds[bird.order]) nextBirds[bird.order] = {};
      if (!nextBirds[bird.order][bird.family]) nextBirds[bird.order][bird.family] = [];
      nextBirds[bird.order][bird.family].push(bird);
    });

    return nextBirds;
  }, []);

  return (
    <div className="all-cards-container">
      <button className="icon-button" onClick={() => setMode(null)}>
        <ArrowIcon className="icon-reversed" />Back
      </button>
      {Object.keys(groupedBirds).map((order) => (
        <section key={order}>
          <h2 className="bare-text">{order}</h2>
          <div>{Object.keys(groupedBirds[order]).map((family) => (
            <section key={family}>
              <h3 className="bare-text">{`${family} - ${groupedBirds[order][family][0].familyCommon}`}</h3>
              <div className="family-card-container">{groupedBirds[order][family].map((bird) => (
                <BirdCard key={bird.speciesCommon} bird={bird} />
              ))}</div>
            </section>
          ))}</div>
        </section>
      ))}
    </div>
  );
};

export default AllCardsContainer;