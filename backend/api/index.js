// Vercel serverless entry point for Express app
import server from "../server.js";
import serverless from "serverless-http";

export default serverless(server);