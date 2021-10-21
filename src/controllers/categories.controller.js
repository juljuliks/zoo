/* eslint-disable class-methods-use-this */
const CategoriesService = require('../services/categories.service');

const categoryService = new CategoriesService();

class CategoriesController {
  async getCategoryById(req, res) {
    try {
      const animals = await categoryService.findAllAnimalsByCategoryId(
        req.params.id,
      );
      const category = req.categories.find((el) => el.id == req.params.id);
      if(req.session.admin) {
        res.render('category', {categories: req.categories, animals, category: category.title, admin: req.session.admin});
        return
      }
      res.render('category', {categories: req.categories, animals,category: category.title});
    } catch (error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }

  async createNewAnimal(req, res) {
    const animalData = req.body;
    animalData.image = req.file.path.replace(/^public/, '');

    try {
      const newAnimal = await categoryService.createAnimal(animalData);
      res.status(201).json(newAnimal);
    } catch (error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }

  async addPhotoForAnimal(req, res) {
    const animalData = req.body;
    animalData.image = req.file.path.replace(/^public/, '');
    try {
      const newPhoto = await categoryService.addPhoto(animalData)
      res.status(200).json({ newPhoto });
    } catch(error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }

  async editAnimal(req, res) {
    const animalData = req.body;
    if(req.file) {
      animalData.image = req.file.path.replace(/^public/, '');
    }
    try {
      const editedAnimal = await categoryService.editAnimal(animalData)
      res.status(200).json({ editedAnimal });
    } catch(error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }

  async deleteAnimal(req, res) {
    const {animalId} = req.params
    try {
      await categoryService.deleteAnimalById(animalId)
      const { message } = 'Успешно удалено';
      res.status(200).json({ message });
    } catch(error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }

  async getAnimalById(req, res) {
    const {animalId} = req.params
    const animal = await categoryService.findAnimalById(animalId)
    let animalPhotos = await categoryService.findAnimalPhotos(animalId)
    if(animalPhotos.length) {
      const [firstPhoto] = animalPhotos;
      firstPhoto.active = true;
    } 
    animalPhotos = animalPhotos.length ? animalPhotos: false
    if(req.session.admin) {
      res.render('animal', { categories: req.categories, animal, animalPhotos,  admin: req.session.admin });
    return
    }
    res.render('animal', { categories: req.categories, animal, animalPhotos });
    }
}

module.exports = CategoriesController;
