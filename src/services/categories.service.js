/* eslint-disable class-methods-use-this */
const db = require('../db/models');
const { sequelize } = require('../db/models');

class CategoriesService {
  async findAllCategories() {
    let categories;

    try {
      categories = await db.Category.findAll({ raw: true });
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось найти все категории.' };
    }

    return categories;
  }

  async createNewCategory({ title }) {
    let category;

    try {
      category = await db.Category.create({
        title,
      });
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось создать категорию.' };
    }

    return category;
  }

  async findCategoryById(id) {
    let category;

    try {
      category = await db.Category.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось найти категорию.' };
    }

    return category;
  }

  async editCategoryById({ id, title }) {
    let category;

    try {
      category = await db.Category.update(
        {
          title,
        },
        {
          where: {
            id,
          },
        },
      );
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось отредактировать категорию.' };
    }

    return category;
  }

  async deleteCategoryById(id) {
    try {
      await db.Category.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось удалить категорию.' };
    }

    return { message: 'Категория удалена.' };
  }

  async findAllAnimalsByCategoryId(categoryId) {
    let animals;
    try {
      animals = await db.Animal.findAll({
        attributes: [
          'id',
          'name',
          'description',
          'image',
          'categoryId',
          [sequelize.literal('"Category"."title"'), 'title'],
        ],
        where: { categoryId },
        include: { model: db.Category },
        order: [['id', 'ASC']],
        raw: true,
      });
    } catch (error) {
      console.error(error);
      return { message: 'Не удалось найти животных по ID категории.' };
    }
    return animals;
  }

  async createAnimal({ name, description, image, categoryId }) {
    let animals;
    try {
      animals = await db.Animal.create({
        name,
        description,
        image,
        categoryId,
      });
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось записать зверюшку в БД.' };
    }

    return animals;
  }

  async findAnimalById(animalId) {
    let animal;
    try {
      animal = await db.Animal.findOne({
        where: { id: animalId },
        include: { model: db.Category },
        raw: true,
      });
      const category = animal['Category.title'];
      animal.category = category;
    } catch (error) {
      console.error(error);
      return { message: 'Не удалось вычислить зверюшку по ID.' };
    }
    return animal;
  }

  async findAnimalPhotos(animalId) {
    let animalPhotos;
    try {
      animalPhotos = await db.Photo.findAll({
        where: { animalId },
        raw: true,
      });
      console.log(1, animalPhotos);
    } catch (error) {
      console.error(error);
    }
    return animalPhotos || [];
  }

  async deleteAnimalById(id) {
    try {
      await db.Animal.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error(error);
      return { message: 'Не удалось удалить зверюшку.' };
    }

    return { message: 'Зверюшка удалена.' };
  }

  async addPhoto(animalData) {
    const { image: photoUrl, animalId } = animalData;
    let newImage;
    try {
      newImage = await db.Photo.create({ photoUrl, animalId });
    } catch (error) {
      console.error(error);
      return { message: 'Не удалось добавить фото' };
    }
    return newImage;
  }

  async editAnimal(animalData) {
    const { name, image, description, animalId } = animalData;
    let newImage;
    try {
      if (image) {
        newImage = await db.Animal.update(
          { name, image, description },
          { where: { id: animalId } },
        );
      } else {
        newImage = await db.Animal.update(
          { name, description },
          { where: { id: animalId } },
        );
      }
    } catch (error) {
      console.error(error);
      return { message: 'Не удалось обновить зверя' };
    }
    return newImage;
  }
}

module.exports = CategoriesService;
