module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "trades",
      {
        Id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_set_1: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        id_owner_1: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        id_set_2: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        id_owner_2: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        status_trade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
      }
    );
  };
  