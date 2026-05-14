// Vercel Serverless Function entry point wrapping the existing Express app (ES module)
import express from "express";
import serverless from "serverless-http";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

import userRoutes from "../backend/routes/userRoute.js";
import doctorRoutes from "../backend/routes/doctorRoute.js";
import adminRoutes from "../backend/routes/adminRoute.js";
import secureRoutes from "../backend/routes/secureRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from backend/.env
dotenv.config({ path: path.resolve(__dirname, "backend/.env") });

const app = express();
app.use(express.json());

// Middleware
import cors from "cors";
app.use(cors());

// Mount routes (adjust base paths as needed)
app.use("/api/users", userRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/secure", secureRoutes);

// Export as serverless function
export default serverless(app);