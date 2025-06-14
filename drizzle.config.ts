import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
  console.log("DATABASE URL is not set");
}

export default {
  schema: "./src/lib/supabase/schema.ts",
  dialect: "postgresql",
  out: "./migrations",
  driver: "pglite",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
} satisfies Config;
