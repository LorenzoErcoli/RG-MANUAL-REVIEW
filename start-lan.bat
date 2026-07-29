const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = Number(process.env.PORT || 8510);
const HOST = process.env.HOST || '0.0.0.0';
const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'data');
const UPLOADS = path.join(DATA, 'uploads');
fs.mkdirSync(UPLOADS, { recursive: true });

const files = {
  manual: path.join(DATA, 'manual.json'),
  reviews: path.join(DATA, 'reviews.json'),
  questions: path.join(DATA, 'questions.json'),
  answers: path.join(DATA, 'answers.json'),
  settings: path.join(DATA, 'settings.json')
};

function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch { return fallback; }
}
function writeJson(file, value) {
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(value, null, 2), 'utf8');
  fs.renameSync(tmp, file);
}
function id(prefix) { return `${prefix}-${crypto.randomUUID()}`; }
function now() { return new Date().toISOString(); }

app.use(express.json({ limit: '5mb' }));
app.use('/uploads', express.static(UPLOADS));
app.use(express.static(path.join(ROOT, 'public')));

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, UPLOADS),
  filename: (_, file, cb) => cb(null, `${Date.now()}-${file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_')}`)
});
const upload = multer({ storage, limits: { fileSize: 15 * 1024 * 1024 } });

app.get('/api/bootstrap', (_, res) => {
  res.json({
    manual: readJson(files.manual, { version: '0.0', sections: [] }),
    reviews: readJson(files.reviews, []),
    questions: readJson(files.questions, []),
    answers: readJson(files.answers, []),
    settings: readJson(files.settings, {})
  });
});

app.post('/api/reviews', (req, res) => {
  const reviews = readJson(files.reviews, []);
  const review = {
    id: id('REV'), paragraphId: req.body.paragraphId, sectionId: req.body.sectionId,
    type: req.body.type || 'integrazione', author: req.body.author || 'Anonimo',
    confidence: req.body.confidence || 'media', note: req.body.note || '',
    machine: req.body.machine || '', material: req.body.material || '',
    status: 'submitted', createdAt: now(), updatedAt: now(), attachment: req.body.attachment || null
  };
  if (!review.paragraphId || !review.note.trim()) return res.status(400).json({ error: 'Paragrafo e nota sono obbligatori.' });
  reviews.push(review); writeJson(files.reviews, reviews); res.status(201).json(review);
});

app.patch('/api/reviews/:id', (req, res) => {
  const reviews = readJson(files.reviews, []);
  const i = reviews.findIndex(x => x.id === req.params.id);
  if (i < 0) return res.status(404).json({ error: 'Nota non trovata.' });
  reviews[i] = { ...reviews[i], ...req.body, id: reviews[i].id, updatedAt: now() };
  writeJson(files.reviews, reviews); res.json(reviews[i]);
});

app.post('/api/questions', (req, res) => {
  const questions = readJson(files.questions, []);
  const q = { id: id('Q'), title: req.body.title || '', prompt: req.body.prompt || '', sectionId: req.body.sectionId || '', status: 'open', createdAt: now() };
  if (!q.title.trim() || !q.prompt.trim()) return res.status(400).json({ error: 'Titolo e domanda sono obbligatori.' });
  questions.push(q); writeJson(files.questions, questions); res.status(201).json(q);
});

app.post('/api/answers', (req, res) => {
  const answers = readJson(files.answers, []);
  const a = { id: id('ANS'), questionId: req.body.questionId, author: req.body.author || 'Anonimo', confidence: req.body.confidence || 'media', text: req.body.text || '', machine: req.body.machine || '', material: req.body.material || '', status: 'submitted', createdAt: now(), attachment: req.body.attachment || null };
  if (!a.questionId || !a.text.trim()) return res.status(400).json({ error: 'Domanda e risposta sono obbligatorie.' });
  answers.push(a); writeJson(files.answers, answers); res.status(201).json(a);
});

app.patch('/api/answers/:id', (req, res) => {
  const answers = readJson(files.answers, []);
  const i = answers.findIndex(x => x.id === req.params.id);
  if (i < 0) return res.status(404).json({ error: 'Risposta non trovata.' });
  answers[i] = { ...answers[i], ...req.body, id: answers[i].id, updatedAt: now() };
  writeJson(files.answers, answers); res.json(answers[i]);
});

app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'File mancante.' });
  res.status(201).json({ name: req.file.originalname, url: `/uploads/${req.file.filename}` });
});

app.get('/api/export', (_, res) => {
  const payload = { exportedAt: now(), manual: readJson(files.manual, {}), reviews: readJson(files.reviews, []), questions: readJson(files.questions, []), answers: readJson(files.answers, []) };
  res.setHeader('Content-Disposition', `attachment; filename="rg-manual-review-export-${new Date().toISOString().slice(0,10)}.json"`);
  res.json(payload);
});

app.put('/api/manual', (req, res) => {
  if (!req.body || !Array.isArray(req.body.sections)) return res.status(400).json({ error: 'Formato manuale non valido.' });
  writeJson(files.manual, req.body); res.json({ ok: true });
});

app.listen(PORT, HOST, () => console.log(`RG Manual Review: http://localhost:${PORT} — LAN: http://<IP-PC>:${PORT}`));
