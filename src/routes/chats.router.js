const router = require('express').Router();
const ChatsController = require('../controllers/chats.controller');

const chatsController = new ChatsController();

router.get('/', chatsController.renderChat);

module.exports = router;
