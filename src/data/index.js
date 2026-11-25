import dancesRaw from './dances.json';
import texts from './texts.json';
import theory from './theory.json';
import songs from './songs.json';

export const dances = dancesRaw.map((d) => ({ ...d, kind: d.key ? texts[d.key].kind : null }));
export { texts, theory, songs };
export const danceName = (d, lang) => (lang === 'ru' ? d.ru : d.hy);
