'use strict';
export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
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
    mealName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mealAmount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateAdded: {
      type: DataTypes.DATE
    }
  }, {});
  Meal.associate = function(models) {
    // associations can be defined here
  };
  return Meal;
};