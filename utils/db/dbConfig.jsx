import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://waste2best_owner:NUGETw9lpso4@ep-long-firefly-a5kxa5zb.us-east-2.aws.neon.tech/waste2best?sslmode=require"
);
export const db = drizzle(sql, { schema });
