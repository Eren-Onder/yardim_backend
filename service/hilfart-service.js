import * as hilfartRepository from "../persistency/hilfart-repository.js";
import config from "../environment-config.json";

export async function createHilfart(pHilfart) {
  return await hilfartRepository.create(pHilfart);
}

export async function deleteHilfart(pId) {
  return await hilfartRepository.remove(pId);
}

export async function getAllHilfarts() {
  return await hilfartRepository.getAll();
}

export async function getHilfartById(pId) {
  return await hilfartRepository.findById(pId);
}

export async function updateHilfart(pId, pUpdateEntity) {
  return await hilfartRepository.update(pId, pUpdateEntity);
}
