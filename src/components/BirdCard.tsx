import { useState, useCallback } from "react";

import Bird from "../data/bird";
import PlayIcon from "./icons/play";
import StopIcon from "./icons/stop";
import { CARD_AUDIO_ACTIONS } from "../data/enums";

function BirdCard(props: {
  bird: Bird,
  cardAudioId: string | null,
  setCardAudioId: React.Dispatch<React.SetStateAction<string | null>>,
  setCardAudioAction: React.Dispatch<React.SetStateAction<CARD_AUDIO_ACTIONS>>
}) {
  const { bird, cardAudioId, setCardAudioId, setCardAudioAction } = props;

  const getImageSource = (index?: number) => {
    if (index) return bird.images[index];
    return bird.images[Math.floor(Math.random() * bird.images.length)];
  };
  const [imageSource, _setImageSource] = useState(getImageSource());

  const audioButtonPress = useCallback((audioId: string) => {
    if (audioId !== cardAudioId) {
      setCardAudioId(audioId);
      setCardAudioAction(CARD_AUDIO_ACTIONS.PLAY);
    }
    else {
      setCardAudioId(null);
      setCardAudioAction(CARD_AUDIO_ACTIONS.STOP);
    }
  }, [cardAudioId]);

  return (
    <figure className="bird-card">
      <img src={imageSource} className="bird-card-image" />
      <section className="bird-card-body">
        <figcaption className="bird-card-caption">
          <span>{bird.speciesCommon}</span>
          <em>{`(${bird.scientific})`}</em>
        </figcaption>
      </section>
      <div className="bird-card-audio-container">
        {bird.audio.map((_audio, index) => {
          const audioId = `${bird.speciesCommon}_${index}`;
          return (
            <button
              key={audioId}
              className="bird-card-audio-button"
              onClick={() => audioButtonPress(audioId)}
            >
              {(audioId !== cardAudioId) && <PlayIcon />}
              {(audioId === cardAudioId) && <StopIcon />}
            </button>
          );
        })}
      </div>
    </figure>
  );
};

export default BirdCard;