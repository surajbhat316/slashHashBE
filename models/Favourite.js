import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/dbConnection.js';

export const Favourite = sequelize.define(
  'Favourite',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
  },
);
await Favourite.sync()

// `sequelize.define` also returns the model
console.log(Favourite === sequelize.models.Favourite); // true