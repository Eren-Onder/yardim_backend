import db from "../models/_sequelize_setup_.js";

export async function getAll() {
  return await db.kanton.findAll();
}

export async function findById(pId) {
  return await db.kanton.findByPk(pId);
}

export async function create(pEntity) {
  return await db.kanton.create(pEntity);
}

export async function remove(pId) {
  return await db.kanton.destroy({
    where: { id: pId },
  });
}

export async function update(pId, pUpdatedEntity) {
  return await db.kanton.update(pUpdatedEntity, {
    where: { id: pId },
  });
}
