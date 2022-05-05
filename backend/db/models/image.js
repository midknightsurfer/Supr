'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    tags: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.User, { foreignKey: "userId" });
    Image.hasMany(models.Comment, { foreignKey: "imageId" });
  };
  return Image;
};