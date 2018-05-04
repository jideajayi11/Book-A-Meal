'use strict';
export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    mealId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    catererId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    menuDate: {
      type: DataTypes.DATE
    }
  }, {});
  Menu.associate = function (models) {
    // associations can be defined here
    Menu.hasMany(models.Meal, {
      foreignKey: 'mealId',
      onDelete: 'SET NULL'
    });
    Menu.belongsTo(models.User, {
      foreignKey: 'catererId',
      onDelete: 'SET NULL'
    });
  };
  return Menu;
}