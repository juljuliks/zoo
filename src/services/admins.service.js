/* eslint-disable class-methods-use-this */
const db = require('../db/models');

class AdminsService {
  async findAllAdmins() {
    let admins;

    try {
      admins = await db.Admin.findAll();
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось найти всех администраторов.' };
    }

    return admins;
  }

  async createNewAdmin({ firstName, lastName, email, password, isSuperAdmin }) {
    let admin;

    try {
      admin = await db.Admin.create({
        firstName,
        lastName,
        email,
        password,
        isSuperAdmin,
      });
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось создать администратора.' };
    }

    return admin;
  }

  async findAdminById(id) {
    let admin;

    try {
      admin = await db.Admin.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось найти администратора.' };
    }

    return admin;
  }

  async findAdminByEmail(email) {
    let admin;

    try {
      admin = await db.Admin.findOne({
        where: {
          email,
        },
      });
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось найти администратора.' };
    }

    return admin;
  }

  async editAdminById({
    id,
    firstName,
    lastName,
    email,
    password,
    isSuperAdmin,
  }) {
    let admin;

    try {
      admin = await db.Admin.update(
        {
          firstName,
          lastName,
          email,
          password,
          isSuperAdmin,
        },
        {
          where: {
            id,
          },
        },
      );
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось отредактировать администратора.' };
    }

    return admin;
  }

  async deleteAdminById(id) {
    try {
      await db.Admin.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось удалить администратора.' };
    }

    return { message: 'Администратор удалена.' };
  }
}

module.exports = AdminsService;
