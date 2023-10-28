module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "items",
      {
        Id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        idOwner: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        denumire: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descriere: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false
        },
        locatie: {
            type: DataTypes.STRING,
            allowNull: false
        },
      }
      
    );
  };
  