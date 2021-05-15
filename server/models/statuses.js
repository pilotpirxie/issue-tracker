module.exports = function (sequelize, DataTypes) {
  return sequelize.define('statuses', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'statuses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'statuses_pkey',
        unique: true,
        fields: [
          { name: 'id' },
        ],
      },
    ],
  });
};
