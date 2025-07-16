import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, loginUserSchema, type User } from "@shared/schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// JWT secret - in production, use environment variable
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-here";

export async function registerRoutes(app: Express): Promise<Server> {
  // POST /api/register
  app.post("/api/register", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(validatedData.email);
      if (existingUser) {
        return res.status(400).json({ 
          message: "User with this email already exists" 
        });
      }

      // Hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(validatedData.password, saltRounds);

      // Create user
      const user = await storage.createUser({
        name: validatedData.name,
        email: validatedData.email,
        password: hashedPassword,
      });

      res.status(201).json({ 
        message: "User registered successfully",
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(400).json({ 
        message: "Registration failed", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // POST /api/login
  app.post("/api/login", async (req, res) => {
    try {
      const validatedData = loginUserSchema.parse(req.body);
      
      // Find user by email
      const user = await storage.getUserByEmail(validatedData.email);
      if (!user) {
        return res.status(401).json({ 
          message: "Invalid email or password" 
        });
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(validatedData.password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ 
          message: "Invalid email or password" 
        });
      }

      // Generate JWT token
      const token = jwt.sign(
        { 
          userId: user.id, 
          email: user.email 
        }, 
        JWT_SECRET, 
        { expiresIn: "24h" }
      );

      res.json({ 
        message: "Login successful",
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(400).json({ 
        message: "Login failed", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // GET /api/users
  app.get("/api/users", async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      
      // Return users without passwords
      const safeUsers = users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email
      }));

      res.json(safeUsers);
    } catch (error) {
      console.error("Users fetch error:", error);
      res.status(500).json({ 
        message: "Failed to fetch users", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
