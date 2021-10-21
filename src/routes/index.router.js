const router = require('express').Router();

const NewsService = require('../services/news.service');
const TariffsService = require('../services/tariffs.service');
const PhotosService = require('../services/photos.service');
const SchedulesService = require('../services/schedule.service');

const tariffsService = new TariffsService();

router.get('/', async (req, res) => {
  const news = await NewsService.findLastNews();
  const tariffs = await tariffsService.getAllTarifs();
  const images = await PhotosService.getAllPhotos();
  const schedule = await SchedulesService.getSchedule();
  if (req.session?.admin?.name) {
    const { admin } = req.session;
    res.render('index', {
      categories: req.categories,
      news,
      tariffs,
      images,
      admin,
      schedule,
    });
    return;
  }
  res.render('index', { categories: req.categories, news, tariffs, images });
});

module.exports = router;
