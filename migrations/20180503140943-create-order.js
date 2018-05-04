'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mealId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      catererId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      customerId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orderId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orderDate: {
        type: Sequelize.DATE
      },
      orderStatus: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};