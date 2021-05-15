const sql = require('../config/sequelize');

const Boards = require('./boards')(sql.connection, sql.dataTypes);
const Issues = require('./issues')(sql.connection, sql.dataTypes);
const Statuses = require('./statuses')(sql.connection, sql.dataTypes);

Boards.hasMany(Issues, {
  foreignKey: 'board_id',
});

Statuses.hasMany(Issues, {
  foreignKey: 'status',
});

module.exports = {
  Boards,
  Statuses,
  Issues,
};
