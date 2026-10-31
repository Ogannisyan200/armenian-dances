import { useLang } from '../context/LangContext.jsx';

export default function Footer() {
  const { u } = useLang();
  return (
    <footer>
      <div className="wrap">
        <span>{u.dev}</span>
        <span>
          {u.bug} <a href="https://t.me/ritsrqxx">@ritsrqxx</a>
        </span>
      </div>
    </footer>
  );
}
