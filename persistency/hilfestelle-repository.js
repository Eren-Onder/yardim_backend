import db from "../models/_sequelize_setup_.js";

export async function getAll() {
  return await db.hilfestelle.findAll();
}

export async function findById(pId) {
  return await db.hilfestelle.findByPk(pId);
}

export async function create(pHilfestelle) {
  return await db.hilfestelle.create(pHilfestelle);
}

export async function remove(pId) {
  return await db.hilfestelle.destroy({
    where: { id: pId },
  });
}

export async function update(pId, pUpdatedHilfestelle) {
  return await db.hilfestelle.update(pUpdatedHilfestelle, {
    where: { id: pId },
  });
}
