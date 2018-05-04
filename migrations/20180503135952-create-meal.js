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
        type: Sequelize.UUID,
        onDelete: 'SET NULL',
        references: {
          model: 'Menus',
          key: 'mealId'
        }
      },
      catererId: {
        type: Sequelize.UUID,
        onDelete: 'SET NULL',
        references: {
          model: 'Users',
          key: 'userId'
        }
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