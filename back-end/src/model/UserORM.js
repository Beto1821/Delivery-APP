const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../database/models');

const create = async ({ email, password: p, name, role }) => {
  const password = md5(p);

  if (!role) {
    const user = await User.create({ email, password, name, role: 'customer' });
    
    return user;
  }

  const user = await User.create({ email, password, name, role });

  return user;
};

const findByPk = async (id) => User.findByPk(id);

const findByEmail = async (email) => User.findOne({ where: { email } });

const findAll = async (id) =>
  User.findAll({
    where: {
      id: {
        [Op.ne]: [id],
      },
    },
    attributes: { exclude: ['password'] },
  });

const findByEmailAndPassword = async (email, password) => (
  User.findOne({ where: { email, password } }));

const destroy = async (id) => User.destroy({ where: { id } });

const findByRole = async (role) =>
  User.findAll({
    where: {
      role,
    },
    attributes: { exclude: ['password', 'email'] },
  });

const UserORM = {
  create,
  destroy,
  findAll,
  findByPk,
  findByEmail,
  findByEmailAndPassword,
  findByRole,
};

module.exports = UserORM;
