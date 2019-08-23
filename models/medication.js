'use strict';
module.exports = (sequelize, DataTypes) => {
  const Medication = sequelize.define('Medication', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dosage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    perDay: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {});
  Medication.associate = function (models) {
    // associations can be defined here
    Medication.belongsTo(models.User);
  };
  return Medication;
};