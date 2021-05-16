const Sequelize = require('sequelize');

const sql = new Sequelize(
  process.env.DB_NAME || 'issue_tracker',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || 'mysecretpassword',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: process.env.NODE_ENV !== 'test',
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
  dataTypes: Sequelize.DataTypes,
};
