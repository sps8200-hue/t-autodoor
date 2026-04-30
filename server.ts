import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;
  
  app.use(express.json({ limit: '50mb' }));

  const DATA_FILE = path.join(process.cwd(), 'app_data.json');

  // Initialize data file if not exists
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ portfolio: [], testimonials: [], products: [], inquiries: [] }));
  }

  // API Routes
  app.get("/api/data", (req, res) => {
    try {
      if (!fs.existsSync(DATA_FILE)) {
        const initialData = { portfolio: [], testimonials: [], products: [], inquiries: [] };
        fs.writeFileSync(DATA_FILE, JSON.stringify(initialData));
        return res.json(initialData);
      }
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      res.json(JSON.parse(data));
    } catch (error) {
      console.error("Error reading data:", error);
      res.status(500).json({ error: "데이터를 읽는 중 오류가 발생했습니다." });
    }
  });

  app.post("/api/save", (req, res) => {
    try {
      const { type, data } = req.body;
      if (!type || !data) {
        return res.status(400).json({ error: "잘못된 요청입니다." });
      }

      let currentData = { portfolio: [], testimonials: [], products: [], inquiries: [] };
      if (fs.existsSync(DATA_FILE)) {
        try {
          currentData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        } catch (e) {
          console.error("Error parsing existing data, starting fresh:", e);
        }
      }
      
      if (type === 'portfolio') currentData.portfolio = data;
      else if (type === 'testimonials') currentData.testimonials = data;
      else if (type === 'products') currentData.products = data;
      else if (type === 'inquiries') currentData.inquiries = data;
      else return res.status(400).json({ error: "알 수 없는 데이터 유형입니다." });
      
      fs.writeFileSync(DATA_FILE, JSON.stringify(currentData, null, 2));
      console.log(`Saved ${type} data successfully.`);
      res.json({ success: true });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: "데이터를 저장하는 중 오류가 발생했습니다." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
