import { config } from "dotenv";
import { join } from "path";

const envPath = join(__dirname, './../../.env');

config({ path: envPath })

export default {
    databaseUrl: process.env.DATABASE_URL,
    secretKey: process.env.SECRET_KEY
}