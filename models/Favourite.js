import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize({dialect: "mysql"});

const Favourite = sequelize.define(
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