export default (sequelize, Sequelize) => {
  return sequelize.define("adresse", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    adresse: {
      type: Sequelize.STRING,
    },
  });
};
