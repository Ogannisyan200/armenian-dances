import { useState } from 'react';
import { useLang } from '../context/LangContext.jsx';
import { dances } from '../data/index.js';
import DanceCard from '../components/DanceCard.jsx';

export default function Dances() {
  const { u, kinds } = useLang();
  const [q, setQ] = useState('');
  const [onlyDesc, setOnlyDesc] = useState(false);
  const [kind, setKind] = useState('');
  const list = dances.filter(
    (d) =>
      (!onlyDesc || d.key) &&
      (!kind || d.kind === kind) &&
      (q === '' || (d.hy + ' ' + d.ru).toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <div className="sec">
      <h2>{u.dances} ({dances.length})</h2>
      <input type="search" placeholder={u.search} value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="chips">
        <button className={'chip' + (onlyDesc ? ' on' : '')} onClick={() => setOnlyDesc(!onlyDesc)}>{u.only}</button>
        <button className={'chip' + (!kind ? ' on' : '')} onClick={() => setKind('')}>{u.all}</button>
        {Object.keys(kinds).map((c) => (
          <button key={c} className={'chip' + (kind === c ? ' on' : '')} onClick={() => setKind(kind === c ? '' : c)}>
            {kinds[c]}
          </button>
        ))}
      </div>
      <div className="grid">
        {list.map((d) => <DanceCard key={d.id} dance={d} />)}
      </div>
    </div>
  );
}
