import { useEffect, useRef } from 'react';

export default function Reveal({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const show = () => el.classList.add('in');

    // Элемент уже во вьюпорте при монтировании (переход между разделами) — показываем сразу.
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const r = el.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0) {
      show();
      return undefined;
    }
    // Нет IntersectionObserver — не прячем контент.
    if (typeof IntersectionObserver === 'undefined') {
      show();
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show();
            io.unobserve(e.target);
          }
        }),
      { threshold: 0, rootMargin: '0px 0px -5% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div className="rv" ref={ref}>{children}</div>;
}
