export default (sequelize, Sequelize) => {
  return sequelize.define("kanton", {
    kanton: {
      type: Sequelize.STRING,
    },
    stadt: {
      type: Sequelize.STRING,
    },
  });
};
