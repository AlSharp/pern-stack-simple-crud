const express = require('express');
const router = express.Router();

module.exports = pool => {
  router.get('/users', async (req, res) => {
    try {
      const results = await pool.query('SELECT * FROM users ORDER BY id ASC');
      res.status(200).json({ users: results.rows, error: null });
    }
    catch(error) {
      res.status(500).json({ users: null, error: error.message });
    }
  });

  router.get('/users/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      const results = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
      res.status(200).json({ user: results.rows[0], error: null });
    }
    catch(error) {
      res.status(500).json({ user: null, error: error.message });
    }
  });

  router.post('/users', async (req, res) => {
    try {
      const { name, email } = req.body;
      const results = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', [name, email]);
      res.status(201).json({ message: `User was created with ID ${results.rows[0].id}`, error: null });
    }
    catch(error) {
      res.status(500).json({ message: null, error: error.message });
    }
  });

  router.put('/users/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { name, email } = req.body;
      await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
      res.status(200).json({ message: `User with ID ${id} was updated`, error: null });
    }
    catch(error) {
      res.status(500).json({ message: null, error: error.message });
    }
  })

  router.delete('/users/:id', async (req, res) => {
    try {
      const id = req.params.id;
      await pool.query('DELETE FROM users WHERE id = $1', [id]);
      res.status(200).json({ message: `User with ID ${id} was deleted`, error: null });
    }
    catch(error) {
      res.status(500).json({ message: null, error: error.message });
    }
  })

  return router;
};