export default (sequelize, Sequelize) => {
  const Hilfestelle = sequelize.define("hilfestelle", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    erforderlich: {
      type: Sequelize.STRING,
    },
    endtermin: {
      type: Sequelize.STRING,
    },
    userInfo: {
      type: Sequelize.STRING,
    },
  });

  return Hilfestelle;
};
