export default function Flashcard({ front, back, flipped, onFlip, hint }) {
  return (
    <div className={'flip' + (flipped ? ' on' : '')} onClick={onFlip}>
      <div className="face f">
        <h3>{front}</h3>
        <small>{hint}</small>
      </div>
      <div className="face bk">{back}</div>
    </div>
  );
}
