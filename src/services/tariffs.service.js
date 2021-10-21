/* eslint-disable class-methods-use-this */
const db = require('../db/models');

class TariffsService {
    async getAllTarifs() {
    let tariffs;
    try {
      tariffs = await db.Tariff.findAll({attributes: ['id', 'title', 'description','condition', 'price','image'], raw: true, order: [['id', 'ASC']]})
    }
    catch(e) {
       console.error(error);
      return { message: 'Не удалось найти все тарифы.' };
    }
    return tariffs
  }

  async createNewTariff({ title, description, condition, price, image }) {
    try {
      const tariff = await db.Tariff.create({
        title,
        description,
        condition,
        price,
        image,
      });

      return tariff;
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось создать тариф.' };
    }
  }

  async findTariffById(id) {
    try {
      const tariff = await db.Tariff.findOne({
        where: {
          id,
        },
      });

      return tariff;
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось найти тариф.' };
    }
  }

  async editTariff(tariffData, id) {
    const {condition, description, title, price, image} = tariffData
    let tariff
    try {
      if(image) {
        tariff = await db.Tariff.update({condition, description, title, price, image}, {where: {id}})
      } 
        tariff = await db.Tariff.update({condition, description, title, price}, {where: {id}})
    } catch (error) {
      console.error(error);
      return { message: 'Не удалось обновить тариф' };
    }
    return tariff
  }

  async deleteTariffById(id) {
    try {
      await db.Tariff.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось удалить тариф.' };
    }

    return { message: 'Новость удалена.' };
  }
}

module.exports = TariffsService;
