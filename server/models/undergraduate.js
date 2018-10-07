'use strict';
module.exports = (sequelize, DataTypes) => {
  const undergrade = sequelize.define('undergraduate', {
    name: DataTypes.STRING,
    year: DataTypes.DATE,
    majro: DataTypes.STRING,
    eog: DataTypes.DATE
  }, {});
  undergrade.associate = function(models) {
    // associations can be defined here
  };
  return undergrade;
};