'use strict';
export default (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
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
    customerId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orderId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orderDate: {
      type: DataTypes.DATE
    },
    orderStatus: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.User, {
      foreignKey: 'customerId',
      onDelete: 'SET NULL'
    });
    Order.belongsTo(models.Meal, {
      foreignKey: 'mealId',
      onDelete: 'SET NULL'
    });
  };
  return Order;
}