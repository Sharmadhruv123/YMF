import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Example route to test Prisma
app.get('/api/test-db', async (req, res) => {
  try {
    // Attempting a simple raw query to test connection
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', message: 'Database connection successful' });
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ status: 'error', message: 'Database connection failed', error: String(error) });
  }
});

// Contact submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, city, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !phone || !city) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Save to MySQL via Prisma
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone,
        city,
        message: message || null,
      },
    });

    res.status(201).json({ success: true, data: submission });
  } catch (error) {
    console.error('Failed to save contact submission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
