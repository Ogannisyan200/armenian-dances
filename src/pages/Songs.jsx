import { useRef, useState } from 'react';
import { useLang } from '../context/LangContext.jsx';
import audio from '../data/audio.json';

// Где лежат файлы: локально /audio/, в продакшене — URL хранилища (VITE_AUDIO_BASE в .env.production)
const BASE = import.meta.env.VITE_AUDIO_BASE || '/audio/';
const PAGE = 50;

export default function Songs() {
  const { u } = useLang();
  const [q, setQ] = useState('');
  const [limit, setLimit] = useState(PAGE);
  const current = useRef(null);
  const list = audio.filter((a) => a.title.toLowerCase().includes(q.toLowerCase()));

  // одновременно играет только одна дорожка
  const onPlay = (e) => {
    if (current.current && current.current !== e.target) current.current.pause();
    current.current = e.target;
  };

  return (
    <div className="sec">
      <h2>{u.songs} ({audio.length})</h2>
      <input type="search" placeholder={u.search_song} value={q} onChange={(e) => { setQ(e.target.value); setLimit(PAGE); }} />
      {list.slice(0, limit).map((a) => (
        <div className="panel" key={a.id}>
          <h3>{a.title}</h3>
          <audio controls preload="none" src={BASE + a.file} onPlay={onPlay} style={{ width: '100%' }} />
        </div>
      ))}
      {limit < list.length && <button className="btn" onClick={() => setLimit(limit + PAGE)}>{u.more}</button>}
    </div>
  );
}
