import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext.jsx';
import { danceName } from '../data/index.js';

export default function DanceCard({ dance }) {
  const { lang, u, kinds } = useLang();
  return (
    <Link className="card" to={`/dances/${dance.id}`}>
      <h3>{danceName(dance, lang)}</h3>
      {lang === 'ru' && <div className="hy">{dance.hy}</div>}
      <div>
        {dance.kind ? <span className="tag">{kinds[dance.kind]}</span> : <span className="tag no">{u.none}</span>}
      </div>
    </Link>
  );
}
