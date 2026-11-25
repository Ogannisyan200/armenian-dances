import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext.jsx';
import { songs } from '../data/index.js';

export default function Lyrics() {
  const { u } = useLang();
  return (
    <div className="sec">
      <h2>{u.lyrics} ({songs.length})</h2>
      <div className="grid">
        {songs.map((s, i) => (
          <Link key={i} className="card" to={`/lyrics/${i}`}>
            <h3>{s.ha}</h3>
            <div className="hy">{s.la}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
