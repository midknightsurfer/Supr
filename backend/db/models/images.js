'use strict';
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    imageUrl: DataTypes.STRING,
    tags: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Images.associate = function(models) {
    // associations can be defined here
  };
  return Images;
};