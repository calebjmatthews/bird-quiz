import { useState, useEffect } from "react";

import Bird from "../data/bird";

function BirdCard(props: {
  bird: Bird
}) {
  const { bird } = props;

  const getImageSource = (index?: number) => {
    if (index) return bird.images[index];
    return bird.images[Math.floor(Math.random() * bird.images.length)];
  };
  const [imageSource, setImageSource] = useState(getImageSource());

  return (
    <figure className="bird-card">
      <img src={imageSource} className="bird-card-image" />
      <section className="bird-card-body">
        <figcaption className="bird-card-caption">
          <span>{bird.speciesCommon}</span>
          <em>{`(${bird.scientific})`}</em>
        </figcaption>
      </section>
    </figure>
  );
};

export default BirdCard;