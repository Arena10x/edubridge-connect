import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const {
  PGHOST = "localhost",
  PGPORT = "5432",
  PGUSER = "postgres",
  PGPASSWORD = "postgres",
  PGDATABASE = "edubridge_connect",
  PGADMIN_DB = "postgres",
} = process.env;

const adminPool = new Pool({
  host: PGHOST,
  port: Number(PGPORT),
  user: PGUSER,
  password: PGPASSWORD,
  database: PGADMIN_DB,
});

const appPool = new Pool({
  host: PGHOST,
  port: Number(PGPORT),
  user: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
});

const createDatabaseIfMissing = async () => {
  const exists = await adminPool.query(
    "SELECT 1 FROM pg_database WHERE datname = $1",
    [PGDATABASE]
  );

  if (exists.rowCount === 0) {
    await adminPool.query(`CREATE DATABASE "${PGDATABASE}"`);
    console.log(`Created database ${PGDATABASE}`);
  } else {
    console.log(`Database ${PGDATABASE} already exists`);
  }
};

const createTableIfMissing = async () => {
  await appPool.query(`
    CREATE TABLE IF NOT EXISTS registrations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      course TEXT NOT NULL,
      coupon VARCHAR(20),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await appPool.query(`
    CREATE INDEX IF NOT EXISTS registrations_created_at_idx
      ON registrations (created_at DESC);
  `);

  console.log("Table registrations is ready");
};

const main = async () => {
  try {
    await createDatabaseIfMissing();
    await createTableIfMissing();
  } catch (error) {
    console.error("Database setup failed:", error);
    process.exitCode = 1;
  } finally {
    await adminPool.end();
    await appPool.end();
  }
};

main();
