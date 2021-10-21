/* eslint-disable class-methods-use-this */
const NewsService = require('../services/news.service');

const newsService = new NewsService();

class IndexController {
  async getLastNews(req, res) {
    const lastNews = await newsService.findLastNews();
    lastNews.content = `${lastNews.content.substring(0, 140)}...`;
    res.render('index', { categories: req.categories, lastNews });
  }
}

module.exports = IndexController;
