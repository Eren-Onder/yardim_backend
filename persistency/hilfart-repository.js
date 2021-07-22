import db from "../models/_sequelize_setup_.js";

export async function getAll() {
  return await db.hilfart.findAll({
    include: [
      { model: db.adresse },
      { model: db.kanton },
      { model: db.hilfestelle },
    ],
  });
}

export async function findById(pId) {
  return await db.hilfart.findOne({
    where: { id: pId },
    include: [
      { model: db.adresse },
      { model: db.kanton },
      { model: db.hilfestelle },
    ],
  });
}

export async function create(pEntity) {
  return await db.hilfart.create(pEntity);
}

export async function remove(pId) {
  return await db.hilfart.destroy({
    where: { id: pId },
  });
}

export async function update(pId, pUpdatedEntity) {
  return await db.hilfart.update(pUpdatedEntity, {
    where: { id: pId },
  });
}
