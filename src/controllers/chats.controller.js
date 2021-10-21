/* eslint-disable class-methods-use-this */

class ChatsController {
  renderChat(req, res) {
    res.render('chat', {categories: req.categories});
  }
}

module.exports = ChatsController;
