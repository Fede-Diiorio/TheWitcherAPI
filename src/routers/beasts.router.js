const {Router} = require('express');
const dbConfig = require('../dbConfig');
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

module.exports = router;
  