import { useMemo, useState } from 'react';
import { useLang } from '../context/LangContext.jsx';
import { dances, texts, theory, danceName } from '../data/index.js';
import Flashcard from '../components/Flashcard.jsx';

export default function Learn() {
  const { lang, u } = useLang();
  const deck = useMemo(() => {
    const seen = new Set();
    const cards = [];
    dances.forEach((d) => {
      if (d.key && !seen.has(d.key)) {
        seen.add(d.key);
        cards.push({ dance: d, key: d.key });
      }
    });
    return cards;
  }, []);
  const total = deck.length + theory.length;
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [again, setAgain] = useState(0);

  let front, back;
  if (i < deck.length) {
    front = danceName(deck[i].dance, lang);
    back = texts[deck[i].key][lang];
  } else {
    const t = theory[i - deck.length][lang];
    front = t.title + '?';
    back = t.text;
  }
  const next = (ok) => {
    ok ? setKnown(known + 1) : setAgain(again + 1);
    setFlipped(false);
    setI(Math.floor(Math.random() * total));
  };
  return (
    <div className="sec">
      <h2>{u.learn}</h2>
      <Flashcard front={front} back={back} flipped={flipped} onFlip={() => setFlipped(!flipped)} hint={u.flip} />
      <div className="row">
        <button className="btn ghost" onClick={() => next(false)}>{u.again} ({again})</button>
        <button className="btn" onClick={() => next(true)}>{u.know} ({known})</button>
      </div>
    </div>
  );
}
