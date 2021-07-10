import Sequelize from "sequelize";
import dbConfig from "../environment-config.json";
import HilfestelleModel from "./hilfestelle.model.js";
import EnrollmentModel from "./enrollment.model.js";
import KantonModel from "./kanton.model.js";
import AdresseModel from "./adresse.model.js";
import HilfartModel from "./hilfart.model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.hilfestelle = HilfestelleModel(sequelize, Sequelize);
db.kanton = KantonModel(sequelize, Sequelize);
db.enrollment = EnrollmentModel(sequelize, Sequelize);
db.adresse = AdresseModel(sequelize, Sequelize);
db.hilfart = HilfartModel(sequelize, Sequelize);

// create relationships
// https://sequelize.org/master/manual/advanced-many-to-many.html
// Many-to-many-to-many relationships and beyond
db.kanton.belongsToMany(db.adresse, { through: db.hilfart });
db.adresse.belongsToMany(db.kanton, { through: db.hilfart });
db.hilfart.belongsTo(db.adresse);
db.hilfart.belongsTo(db.kanton);
db.kanton.hasMany(db.hilfart);
db.adresse.hasMany(db.hilfart);

db.hilfestelle.belongsToMany(db.hilfart, { through: db.enrollment });
db.hilfart.belongsToMany(db.hilfestelle, { through: db.enrollment });
db.enrollment.belongsTo(db.hilfestelle);
db.enrollment.belongsTo(db.hilfart);
db.hilfestelle.hasMany(db.enrollment);
db.hilfart.hasMany(db.enrollment);

// use it to force to create the db from scratch
// .sync({ force: true })
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

export default db;
