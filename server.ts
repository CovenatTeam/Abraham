import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  const distPath = path.join(process.cwd(), 'dist');
  
  // Ensure dist exists
  if (!fs.existsSync(distPath)) {
    console.error('Error: dist directory not found. Please run npm run build first.');
    // Fallback to serving root index.html if dist is missing (for dev)
    app.use(express.static(process.cwd()));
    app.get('*', (req, res) => {
      res.sendFile(path.join(process.cwd(), 'index.html'));
    });
  } else {
    console.log('Serving static files from dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
