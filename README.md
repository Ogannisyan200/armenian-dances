# Армянские народные танцы

Сайт на React + Vite + React Router. Данные лежат в `src/data/*.json`, их можно править без правки кода.

## Запуск на компьютере
```bash
npm install
npm run dev      # откроется http://localhost:5173
npm run build    # сборка в папку dist
```

## Где что редактировать
- `src/data/dances.json` — 121 танец: армянское и русское название, ключ описания (`key`), ссылки на видео (`videos`).
- `src/data/texts.json` — описания танцев (`ru` и `hy`). Один текст может использоваться у нескольких танцев (по `key`).
- `src/data/theory.json` — раздел «Теория».
- `src/data/songs.json` — тексты песен (`ha` — название, `la` — латиница, `a` — строки армянского текста, `l` — строки латиницы).
- `src/data/ui.json` — надписи интерфейса на русском и армянском.
- `src/styles.css` — дизайн. Картинки узоров в `public/img`.

## GitHub и Vercel
1. Создай репозиторий на GitHub и выполни в папке проекта:
   ```bash
   git init
   git add .
   git commit -m "Первая версия"
   git branch -M main
   git remote add origin https://github.com/ТВОЙ_ЛОГИН/armenian-dances.git
   git push -u origin main
   ```
2. На vercel.com нажми **Add New → Project**, выбери этот репозиторий. Vercel сам определит Vite (команда `npm run build`, папка `dist`). Нажми **Deploy**.
3. Файл `vercel.json` уже настроен, чтобы прямые ссылки вида `/dances/10` открывались.

Чтобы добавить видео к танцу: в `dances.json` впиши ссылку в поле `videos` нужного танца, например `"videos": ["https://youtu.be/..."]`.
