import db from "../models/_sequelize_setup_.js";

export async function getAll() {
  return await db.enrollment.findAll({
    include: [
      { model: db.hilfestelle },
      {
        model: db.adresse,
        include: [{ model: db.hilfart }, { model: db.kanton }],
      },
    ],
  });
}

export async function getAllByHilfestelleId(pHilfestelleId) {
  return await db.enrollment.findAll({
    where: {
      hilfestelleId: pHilfestelleId,
    },
    include: [
      { model: db.hilfestelle },
      {
        model: db.adresse,
        include: [{ model: db.hilfart }, { model: db.kanton }],
      },
    ],
  });
}

export async function getAllByKantonId(pKantonId) {
  return await db.enrollment.findAll({
    include: [
      { model: db.hilfestelle },
      {
        model: db.adresse,
        include: [
          { model: db.hilfart },
          {
            model: db.kanton,
            where: {
              id: pKantonId,
            },
          },
        ],
      },
    ],
  });
}

export async function getAllByHilfartId(pHilfartId) {
  return await db.enrollment.findAll({
    include: [
      { model: db.hilfestelle },
      {
        model: db.adresse,
        include: [
          {
            model: db.hilfart,
            where: {
              id: pHilfartId,
            },
          },
          {
            model: db.kanton,
          },
        ],
      },
    ],
  });
}

export async function findById(pId) {
  return await db.enrollment.findOne({
    where: { id: pId },
    include: [
      { model: db.hilfestelle },
      {
        model: db.adresse,
        include: [{ model: db.hilfart }, { model: db.kanton }],
      },
    ],
  });
}

export async function create(pEntity) {
  return await db.enrollment.create(pEntity);
}

export async function remove(pId) {
  return await db.enrollment.destroy({
    where: { id: pId },
  });
}

export async function update(pId, pUpdatedEntity) {
  return await db.enrollment.update(pUpdatedEntity, {
    where: { id: pId },
  });
}
