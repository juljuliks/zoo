/* eslint-disable class-methods-use-this */
const TariffsService = require('../services/tariffs.service');

const tariffsService = new TariffsService();

class TariffsController {
  async createNewTariff(req, res) {
    const tariffData = req.body;
    tariffData.image = req.file.path.replace(/^public/, '');
    const newTariff = await tariffsService.createNewTariff(req.body);

    res.status(201).json(newTariff);
  }

  async editTariff(req, res) {
    const tariffData = req.body;
    const {id} = req.params
    if(req.file) {
      tariffData.image = req.file.path.replace(/^public\//, '');
    }
    try {
      const editTariff = await tariffsService.editTariff(tariffData, id)
      res.sendStatus(200)
    } catch(error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }

  async deleteTariff(req, res) {
    const {id} = req.params;
    try {
      await tariffsService.deleteTariffById(id)
      res.sendStatus(200)
    } catch(error) {
      const { message } = error;
      res.status(500).json({ message });
    }
  }
}

module.exports = TariffsController;
