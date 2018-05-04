'use strict';
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateAdded: {
      type: DataTypes.DATE
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Meal, {
      foreignKey: 'userId',
      onDelete: 'SET NULL'
    });
    User.hasMany(models.Menu, {
      foreignKey: 'userId',
      onDelete: 'SET NULL'
    });
    User.hasMany(models.Order, {
      foreignKey: 'userId',
      onDelete: 'SET NULL'
    });
  };
  return User;
};