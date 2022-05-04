'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Image, { foreignKey: "imageId" });
    Comment.belongsTo(models.User, { foreignKey: "userId" });    
  };
  return Comment;
};