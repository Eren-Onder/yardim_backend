export default (sequelize, Sequelize) => {
  return sequelize.define("adresse", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    /*strasse: {
      type: Sequelize.STRING,
    },
    wohn: {
      type: Sequelize.INTEGER,
    },*/
  });
};
