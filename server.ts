import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import createModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for AI Insights
  app.post("/api/ai-insights", async (req, res) => {
    try {
      const { studentData } = req.body;
      const token = process.env.GITHUB_TOKEN;

      if (!token) {
        return res.status(500).json({ error: "GITHUB_TOKEN is not configured." });
      }

      const client = createModelClient("https://models.github.ai/inference", new AzureKeyCredential(token));

      const response = await client.path("/chat/completions").post({
        body: {
          messages: [
            { 
              role: "system", 
              content: "You are an expert academic advisor. Analyze the student's performance data and provide actionable advice to improve their grades. Keep the response concise and professional." 
            },
            { 
              role: "user", 
              content: `Analyze this student data: ${JSON.stringify(studentData)}` 
            },
          ],
          model: "openai/gpt-5",
        }
      });

      if (response.status !== "200") {
        throw response.body;
      }

      const content = (response.body as any).choices[0].message.content;
      res.json({ insights: content });
    } catch (error) {
      console.error("AI Insights Error:", error);
      res.status(500).json({ error: "Failed to fetch AI insights." });
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
