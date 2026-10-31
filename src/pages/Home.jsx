import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext.jsx';
import { dances } from '../data/index.js';
import DanceCard from '../components/DanceCard.jsx';
import Pomegranate from '../components/Pomegranate.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Home() {
  const { u } = useLang();
  const described = dances.filter((d) => d.key);
  const day = described[new Date().getDate() % described.length];
  return (
    <div>
      <section className="hero">
        <div>
          <h1>{u.title}</h1>
          <p>{u.lead}</p>
          <Link className="btn" to="/dances">{u.cta}</Link>
        </div>
        <div className="arch">
          Պ<Pomegranate />
        </div>
      </section>
      <Reveal>
        <div className="sec">
          <h2>{u.day}</h2>
          <div className="grid"><DanceCard dance={day} /></div>
        </div>
      </Reveal>
      <Reveal>
        <div className="sec grid">
          {[['theory', '/theory'], ['learn', '/learn'], ['lyrics', '/lyrics'], ['songs', '/songs']].map(([k, to]) => (
            <Link key={k} className="card" to={to}><h3>{u[k]}</h3></Link>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
