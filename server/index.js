import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = (process.env.CORS_ORIGIN ||
  "http://localhost:5173,http://localhost:8080,http://localhost:8081")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const isLocalhost = (origin) =>
  /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin) || isLocalhost(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
  })
);
app.use(express.json());

const pool = new Pool({
  host: process.env.PGHOST || "localhost",
  port: process.env.PGPORT ? Number(process.env.PGPORT) : 5432,
  user: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD || "postgres",
  database: process.env.PGDATABASE || "edubridge_connect",
});

app.get("/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: "Database not reachable" });
  }
});

app.get("/", (_req, res) => {
  res.send("EDUBRIDGE-CONNECT API is running. Try /health or /api/registrations");
});

app.post("/api/registrations", async (req, res) => {
  const { name, email, phone, course, coupon } = req.body ?? {};

  if (!name || !email || !phone || !course) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO registrations (name, email, phone, course, coupon)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, name, email, phone, course, coupon, created_at`,
      [name, email, phone, course, coupon || null]
    );
    return res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("🔥 FULL ERROR:", error);
    return res.status(500).json({
      error: "Failed to save registration",
      message: error.message,
      detail: error.detail,
      code: error.code,
    });
  }
});

app.get("/api/registrations", async (_req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, phone, course, coupon, created_at FROM registrations ORDER BY created_at DESC"
    );
    return res.json(result.rows);
  } catch (error) {
    console.error("Failed to load registrations", error);
    return res.status(500).json({ error: "Failed to load registrations" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

