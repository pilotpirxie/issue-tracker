module.exports = function (sequelize, DataTypes) {
  return sequelize.define('boards', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'boards',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'boards_pkey',
        unique: true,
        fields: [
          { name: 'id' },
        ],
      },
    ],
  });
};
