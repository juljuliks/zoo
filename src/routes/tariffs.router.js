const router = require('express').Router();
const TariffsController = require('../controllers/tariffs.controller');
const upload = require('../middlewares/uploadFile.middleware');

const tariffsController = new TariffsController();

router.post('/', upload.single('image'), tariffsController.createNewTariff);
router.put('/:id', upload.single('image'), tariffsController.editTariff);
router.delete('/:id', tariffsController.deleteTariff)
module.exports = router;
