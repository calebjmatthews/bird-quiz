import { useEffect, useRef, useCallback, useMemo } from "react";

import birds from "../data/birds";
import { CARD_AUDIO_ACTIONS } from "../data/enums";

function CardAudioPlayer(props: {
  cardAudioId: string|null,
  cardAudioAction: CARD_AUDIO_ACTIONS,
  setCardAudioAction: React.Dispatch<React.SetStateAction<CARD_AUDIO_ACTIONS>>
}) {
  const { cardAudioId, cardAudioAction, setCardAudioAction } = props;

  const audioPlayer: React.RefObject <HTMLAudioElement | null> = useRef(null);

  useEffect(() => {
    if (cardAudioAction === CARD_AUDIO_ACTIONS.PLAY) {
      setCardAudioAction(CARD_AUDIO_ACTIONS.READY);
      playAudio();
    }
    else if (cardAudioAction === CARD_AUDIO_ACTIONS.STOP) {
      setCardAudioAction(CARD_AUDIO_ACTIONS.READY);
      if (audioPlayer?.current) {
        audioPlayer.current.pause();
        audioPlayer.current.currentTime = 0;
      }
    };
  }, [cardAudioAction]);

  const playAudio = useCallback(() => {
    if (!audioPlayer?.current) {
      setTimeout(() => playAudio(), 100);
      return;
    };
    audioPlayer.current.play();
  }, [audioPlayer]);

  const cardAudio = useMemo(() => {
    if (!cardAudioId) return undefined;
    const [speciesCommon, index] = cardAudioId.split('_');
    const bird = birds.filter((bird) => bird.speciesCommon === speciesCommon)[0];
    return bird?.audio?.[parseInt(index)];
  }, [cardAudioId]);

  return (
    <audio ref={audioPlayer} src={cardAudio} />
  );
};

export default CardAudioPlayer;