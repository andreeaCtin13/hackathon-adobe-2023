module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "sets",
      {
        Id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        items: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
      }
    );
  };
  