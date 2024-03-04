const express = require('express');
const router = express.Router();
const EtudiantController = require('../controller/student.controller');

// Route pour la création d'un nouvel étudiant
router.post('/', EtudiantController.create);

// Route pour récupérer tous les étudiants
router.get('/', EtudiantController.getAll);

// Route pour la suppression d'un étudiant spécifique
router.delete('/:id', EtudiantController.deleted);

// Route pour la modification d'un étudiant spécifique
router.put('/:id', EtudiantController.update);

module.exports = router;
