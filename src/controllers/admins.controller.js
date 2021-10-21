/* eslint-disable class-methods-use-this */
const db = require('../db/models');
const AdminsService = require('../services/admins.service');
const CategoriesService = require('../services/categories.service');

const adminsService = new AdminsService();
const categoriesService = new CategoriesService();

class AdminsController {
  async renderLoginPage(req, res) {
    
    // const admin = await adminsService.findAdminByEmail(email);
    res.render('admin/adminLogin');
  }

  async renderAdminPage(req, res) {
    let admins;
    try {
      admins = await db.Admin.findAll({raw:true})
    }
    catch (error) {
      const { message } = error;
      console.error(message);
    }
    // const admin = await adminsService.findAdminByEmail(email);
    if(req.session.admin) {
      res.render('admin/adminPage', { categories: req.categories, admin: req.session.admin, admins });
      return
    }
    res.redirect('/admins/login')
  }

  async loginAdmin(req, res) {
    const { email, password } = req.body;
    try {
      const admin = await adminsService.findAdminByEmail(email);
      if (admin.password === password) {
        req.session.admin = {
          name: admin.firstName,
          id: admin.id,
          isSuperAdmin: admin.isSuperAdmin
        }
      }
      res
        .status(200)
        .json({ link: `http://localhost:3000/admins/${admin.id}` });
    } catch (error) {
      const { message } = error;
      console.error(message);
    }
  }

  async createNewAdmin(req, res) {
    try {
      const newAdminData = req.body;
      newAdminData.isSuperAdmin = Boolean(req.body.isSuperAdmin);

      const newAdmin = await adminsService.createNewAdmin(req.body);

      res.status(200).json(newAdmin);
    } catch (error) {
      const { message } = error;
      console.error(message);

      res.status(500).json({ message });
    }
  }

  async logout(req, res) {
    req.session.destroy((error) => {
    if (error) {
      console.log(error);
    }
    res
      .clearCookie('user_sid')
      .redirect('/');
    });
  }

  async redirectOnLogin(req, res) {
    res.redirect('/admins/login')
  }
}

module.exports = AdminsController;
