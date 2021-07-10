import db from "../models/_sequelize_setup_.js";

export async function getAll() {
  return await db.adresse.findAll();
}

export async function findById(pId) {
  return await db.adresse.findByPk(pId);
}

export async function create(pEntity) {
  return await db.adresse.create(pEntity);
}

export async function remove(pId) {
  return await db.adresse.destroy({
    where: { id: pId },
  });
}

export async function update(pId, pUpdatedEntity) {
  return await db.adresse.update(pUpdatedEntity, {
    where: { id: pId },
  });
}
