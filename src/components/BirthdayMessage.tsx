import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

function BirthdayMessage() {
  const [fadeOut, setFadeOut] = useState(false);
  const [itsBirthdayTime, setItsBirthdayTime] = useState(false);

  useEffect(() => {
    const today = new Date();
    const isBirthday = (today.getMonth() === 8 && today.getDate() === 25);
    const alreadySeen = localStorage.getItem('erm-bird-quiz-birthday') === `${today.getFullYear()}`;
    if (isBirthday && !alreadySeen) {
      setItsBirthdayTime(true);
      throwConfetti();

      setTimeout(() => setFadeOut(true), 5000);
      setTimeout(() => {
        localStorage.setItem('erm-bird-quiz-birthday', `${today.getFullYear()}`);
        setItsBirthdayTime(false);
      }, 8000);
    };
  }, []);

  const throwConfetti = (repeats = 0) => {
    if (repeats <= 5) {
      confetti({ origin: { x: 0.2 + Math.random() * 0.4, y: 0.5 + Math.random() * 0.4 } });
      setTimeout(() => throwConfetti(repeats+1), 300);
    }
  };

  if (!itsBirthdayTime) return null;

  return (
    <section className={`birthday-message${fadeOut ? ' fade-out' : ''}`}>
      <h1>Happy Birthday Erm!</h1>
    </section>
  );
};

export default BirthdayMessage;