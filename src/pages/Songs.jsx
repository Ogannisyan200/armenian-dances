import { useLang } from '../context/LangContext.jsx';

export default function Songs() {
  const { u } = useLang();
  return (
    <div className="sec">
      <h2>{u.songs}</h2>
      <div className="soon">{u.soon}</div>
    </div>
  );
}
