import * as hilfestelleRepository from "../persistency/hilfestelle-repository.js";
import config from "../environment-config.json";

export async function createHilfestelle(pHilfestelle) {
  return await hilfestelleRepository.create(pHilfestelle);
}

export async function deleteHilfestelle(pId) {
  return await hilfestelleRepository.remove(pId);
}

export async function getAllHilfestelles() {
  return await hilfestelleRepository.getAll();
}

export async function getByAdminEmailHilfestelles(pEmail) {
  return await hilfestelleRepository.getByAdminEmail(pEmail);
}

export async function getHilfestelleById(pId) {
  return await hilfestelleRepository.findById(pId);
}

export async function updateStudent(pId, pUpdateEntity) {
  return await hilfestelleRepository.update(pId, pUpdateEntity);
}
