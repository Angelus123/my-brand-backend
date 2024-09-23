/* eslint-disable no-useless-catch */
import database from "../database/models";

class userService {
  static async getUserByMail(email) {
    try {
      const user = await database.User.findOne({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        where: {
          email,
        },
      });
      if (user) {
        return user;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(id) {
    try {
      return await database.User.findOne({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async createNewUser(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(email, updates) {
    try {
      return await database.User.update(updates, {
        returning: true,
        where: { email },
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      return await database.User.destroy({
        returning: true,
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async getAllUsers() {
    try {
      return await database.User.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getUser(email) {
    try {
      return await database.User.findOne({
        where: {
          email,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
export default userService;
