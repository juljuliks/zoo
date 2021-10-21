const router = require('express').Router();
const db = require('../db/models');
const CategoriesController = require('../controllers/categories.controller');
const CategoriesService = require('../services/categories.service');
const upload = require('../middlewares/uploadFile.middleware');

const categoriesController = new CategoriesController();

router.get('/:id', categoriesController.getCategoryById);

router.get('/:categoryId/animals/:animalId', categoriesController.getAnimalById);

router.post('/:categoryId/animals/:animalId/photos', upload.single('image'), categoriesController.addPhotoForAnimal);

router.post('/:categoryId/animals', upload.single('image'), categoriesController.createNewAnimal);

router.put('/:categoryId/animals/:animalId', upload.single('image'), categoriesController.editAnimal)

router.delete('/:categoryId/animals/:animalId', categoriesController.deleteAnimal)

module.exports = router;
