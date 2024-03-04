const DeptController = require('../controller/departement.controller');
const express = require('express');
const router = express.Router();

// Route pour créer un département
router.post('/', DeptController.create);

// Route pour récupérer tous les départements
router.get('/', DeptController.getAll);

// Route pour modifier un département
router.put('/:id', DeptController.update);

// Route pour supprimer un département
router.delete('/:id', DeptController.deleted);

// Exporter le routeur
module.exports = router;
