export default (sequelize, Sequelize) => {
  const Hilfestelle = sequelize.define("hilfestelle", {
    name: {
      type: Sequelize.STRING,
    },
    kanton: {
      type: Sequelize.STRING,
    },
    stadt: {
      type: Sequelize.STRING,
    },
    strasse: {
      type: Sequelize.STRING,
    },
    wohn: {
      type: Sequelize.INTEGER,
    },

    erforderlich: {
      type: Sequelize.STRING,
    },
    endtermin: {
      type: Sequelize.STRING,
    },

    hilfart: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    userInfo: {
      type: Sequelize.STRING,
    },
  });

  return Hilfestelle;
};
