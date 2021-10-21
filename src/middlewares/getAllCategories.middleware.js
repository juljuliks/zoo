const CategoriesService = require('../services/categories.service');

const categoriesService = new CategoriesService();

const getAllCategories = async (req, res, next) => {
  const categories = await categoriesService.findAllCategories();
  req.categories = categories;
  next();
};

module.exports = getAllCategories;
