import { Link, useParams } from 'react-router-dom';
import { useLang } from '../context/LangContext.jsx';
import { dances, texts, danceName } from '../data/index.js';

export default function DancePage() {
  const { id } = useParams();
  const { lang, u, kinds } = useLang();
  const d = dances.find((x) => x.id === Number(id));
  if (!d) return <p>—</p>;
  const tx = d.key ? texts[d.key] : null;
  return (
    <div className="sec">
      <Link to="/dances">← {u.dances}</Link>
      <h2 style={{ marginTop: 12 }}>{danceName(d, lang)}</h2>
      {lang === 'ru' && <div className="hy">{d.hy}</div>}
      <div className="panel">
        {tx ? (
          <dl>
            <dt>{u.type}</dt>
            <dd>{kinds[tx.kind]}</dd>
            <dt>{u.info}</dt>
            <dd>{tx[lang]}</dd>
            {d.videos.length > 0 && <dt>{u.video}</dt>}
            {d.videos.length > 0 && (
              <dd>
                {d.videos.map((v) => (
                  <a key={v} className="btn vb" href={v} target="_blank" rel="noopener noreferrer">▶ {u.watch}</a>
                ))}
              </dd>
            )}
          </dl>
        ) : (
          <p>{u.none}</p>
        )}
      </div>
    </div>
  );
}
