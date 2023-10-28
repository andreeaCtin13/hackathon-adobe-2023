module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "users",
      {
        Id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        mail: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            unique: true
        }
      }
    );
  };
  