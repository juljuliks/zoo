const router = require('express').Router();

const SchedulesService = require('../services/schedule.service');

const schedulesService = new SchedulesService();

router.get('/', async (req, res) => {
  const schedule = await SchedulesService.getSchedule();

  res.status(200).json(schedule);
});

router.put('/', async (req, res) => {
  await schedulesService.editSchedule(req.body);

  const editedSchedule = await SchedulesService.getSchedule();

  res.status(200).json({ message: 'Расписание обновлено' });
});

module.exports = router;
