// Генерация src/data/audio.json из папки с аудио. Названия = имена файлов как есть (без расширения).
// Запуск: node scripts/make-audio-manifest.mjs ./audio-src
import fs from 'node:fs';

const dir = process.argv[2] || './audio-src';
const files = fs
  .readdirSync(dir)
  .filter((f) => /\.(mp3|m4a|ogg|opus|wav)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, 'hy'));
const out = files.map((file, i) => ({
  id: i + 1,
  file, // имя файла в хранилище, как есть
  title: file.replace(/\.[^.]+$/, '').normalize('NFC'), // название на сайте = имя файла без расширения
}));
fs.writeFileSync('src/data/audio.json', JSON.stringify(out, null, 1));
console.log(`audio.json: ${out.length} записей`);
