import * as kantonRepository from "../persistency/kanton-repository.js";
import config from "../environment-config.json";

export async function createKanton(pKanton) {
  return await kantonRepository.create(pKanton);
}

export async function deleteKanton(pId) {
  return await kantonRepository.remove(pId);
}

export async function getAllKantons() {
  return await kantonRepository.getAll();
}

export async function getKantonById(pId) {
  return await kantonRepository.findById(pId);
}

export async function updateKanton(pId, pUpdateEntity) {
  return await kantonRepository.update(pId, pUpdateEntity);
}
