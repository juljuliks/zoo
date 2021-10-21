/* eslint-disable class-methods-use-this */
const NewsService = require('../services/news.service');

const newsService = new NewsService();

class NewsController {
  async createNews(req, res) {
    const newsData = req.body;
    newsData.image = req.file.path.replace(/^public\//, '');
    const news = await newsService.createNews(req.body);
    res.status(201).json(news);
  }

  async editNews(req, res) {
  const newsData = req.body;
  const {id} = req.params
    if(req.file) {
      newsData.image = req.file.path.replace(/^public\//, '');
    }
    try {
      const editNews = await newsService.editNews(newsData, id)
      res.sendStatus(200)
    } catch(error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }

  async deleteNews(req, res) {
    const {id} = req.params
    try {
      await newsService.deleteNewsById(id)
      res.sendStatus(200)
    } catch(error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }
}

module.exports = NewsController;
