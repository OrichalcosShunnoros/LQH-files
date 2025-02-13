import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

const DOCS_FOLDER = path.join(__dirname, "../../public/docs");

app.use(cors());
app.use(express.json());

app.get("/api/files", (_, res) => {
  try {
    if (!fs.existsSync(DOCS_FOLDER)) {
      return res.status(404).json({ error: "Docs folder not found" });
    }
    const files = fs.readdirSync(DOCS_FOLDER);
    res.json(files);
  } catch (error) {
    console.error("Error reading directory:", error);
    res.status(500).json({ error: "Error reading directory" });
  }
});

app.get("/api/file/:name", (req: Request, res: Response) => {
  const fileName = req.params.name;
  const filePath = path.join(DOCS_FOLDER, fileName);

  if (!fs.existsSync(filePath)) return res.status(404).json({ error: "File not found" });

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading file" });
    }
    res.send(data);
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
