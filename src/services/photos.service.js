/* eslint-disable class-methods-use-this */
const db = require('../db/models');
const {sequelize} = require('../db/models');

class PhotosService {
  static async getAllPhotos() {
    let tariffs;
    try {
      tariffs = await db.Photo.findAll({ order: sequelize.random() , limit: 7, raw: true })
      tariffs = tariffs.map((el, i) => {
        el.class = `item-${i+1} galery_card `
        return el
      })
      tariffs[2].class+='galery_card--long'
    }
    catch(e) {
       console.error(e);
      return { message: 'Не удалось найти все фото.' };
    }
    return tariffs
  }
}

module.exports = PhotosService