'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Meals', {
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
      mealName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mealAmount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      imgUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateAdded: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('Meals');
  }
};