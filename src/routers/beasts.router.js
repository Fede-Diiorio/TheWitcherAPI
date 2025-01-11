import { Router } from 'express';
import dbConfig from '../dbConfig.js';

const router = Router();

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
      const [rows] = await dbConfig.query('SELECT * FROM monsters');
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;
  