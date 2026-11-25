import { useLang } from '../context/LangContext.jsx';
import { theory } from '../data/index.js';
import Reveal from '../components/Reveal.jsx';

export default function Theory() {
  const { lang, u } = useLang();
  return (
    <div className="sec">
      <h2>{u.theory}</h2>
      {theory.map((t, i) => (
        <Reveal key={i}>
          <div className="panel">
            <h3>{t[lang].title}</h3>
            <p>{t[lang].text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
