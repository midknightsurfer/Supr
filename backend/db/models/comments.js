'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    comment: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
  };
  return Comments;
};