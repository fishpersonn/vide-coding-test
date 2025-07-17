import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      message: "Server is running with Supabase integration" 
    });
  });

  // Since we're using Supabase for authentication and data management,
  // we don't need custom authentication routes here.
  // All auth will be handled client-side with Supabase Auth.

  const httpServer = createServer(app);
  return httpServer;
}