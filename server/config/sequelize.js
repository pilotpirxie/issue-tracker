const Sequelize = require('sequelize');

const sql = new Sequelize(
  'issue_tracker',
  'postgres',
  'mysecretpassword',
  {
    host: 'localhost',
    dialect: 'postgres',
    define: {
      underscored: true,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_unicode_ci',
      },
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

module.exports = {
  connection: sql,
  dataTypes: Sequelize.dataTypes,
};
