/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
const db = require('../db/models');

class SchedulesService {
  static async getSchedule() {
    try {
      const schedule = await db.Schedule.findOne();

      if (!schedule) {
        return {
          weekdaysOpening: '09:00',
          weekdaysClosing: '20:00',
          weekendOpening: '08:00',
          weekendClosing: '21:00',
        };
      }

      for (const key in schedule.dataValues) {
        if (
          schedule.dataValues.hasOwnProperty(key) &&
          typeof schedule.dataValues[key] === 'string'
        ) {
          schedule.dataValues[key] = schedule.dataValues[key].slice(
            0,
            schedule.dataValues[key].length - 3,
          );
        }
      }

      return schedule;
    } catch (e) {
      console.error(e);
      return { message: 'Не удалось найти расписание.' };
    }
  }

  async editSchedule({
    weekdaysOpening,
    weekdaysClosing,
    weekendOpening,
    weekendClosing,
  }) {
    try {
      const schedule = await db.Schedule.update(
        { weekdaysOpening, weekdaysClosing, weekendOpening, weekendClosing },
        {
          where: {
            id: 1,
          },
        },
      );

      return schedule;
    } catch (e) {
      console.error(e);
      return { message: 'Не удалось изменить расписание.' };
    }
  }
}

module.exports = SchedulesService;
