import { Link, NavLink } from 'react-router-dom';
import { useLang } from '../context/LangContext.jsx';

const items = [
  ['/', 'home'],
  ['/theory', 'theory'],
  ['/dances', 'dances'],
  ['/learn', 'learn'],
  ['/lyrics', 'lyrics'],
  ['/songs', 'songs'],
];

export default function Nav() {
  const { lang, setLang, u } = useLang();
  return (
    <header>
      <Link className="logo" to="/">{u.title}</Link>
      <nav>
        {items.map(([to, k]) => (
          <NavLink key={k} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
            {u[k]}
          </NavLink>
        ))}
        <button onClick={() => setLang(lang === 'ru' ? 'hy' : 'ru')}>{lang === 'ru' ? 'ՀԱՅ' : 'РУ'}</button>
      </nav>
    </header>
  );
}
