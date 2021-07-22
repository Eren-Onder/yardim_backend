export default (sequelize, Sequelize) => {
  return sequelize.define("hilfart", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hilfart: {
      type: Sequelize.STRING,
    },
  });
};
