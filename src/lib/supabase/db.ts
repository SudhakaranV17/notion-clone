import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("DATABASE_URL is not set");
  throw new Error("DATABASE_URL is not set");
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });

const db = drizzle(client, { schema });

// every time we run the server, we need to migrate the database and check if the database schemas is up to date
const migrateDb = async () => {
  try {
    console.log("Migrating database...");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("Database migrated successfully");
  } catch (error) {
    console.error("Error migrating database:", error);
  }
};
migrateDb();
export default db;
