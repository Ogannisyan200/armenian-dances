import { Link, useParams } from 'react-router-dom';
import { useLang } from '../context/LangContext.jsx';
import { songs } from '../data/index.js';

export default function SongPage() {
  const { id } = useParams();
  const { u } = useLang();
  const s = songs[Number(id)];
  if (!s) return null;
  return (
    <div className="sec">
      <Link to="/lyrics">← {u.lyrics}</Link>
      <h2 style={{ margin: '12px 0' }}>{s.ha}</h2>
      <div className="hy">{s.la}</div>
      <div className="panel">
        <h3>{u.arm}</h3>
        <div className="lyr">{s.a.join('\n')}</div>
      </div>
      {s.l.length > 0 && (
        <div className="panel">
          <h3>{u.lat}</h3>
          <div className="lyr">{s.l.join('\n')}</div>
        </div>
      )}
    </div>
  );
}
