import * as adresseRepository from "../persistency/adresse-repository.js";
import config from "../environment-config.json";

export async function createAdresse(pAdresse) {
  return await adresseRepository.create(pAdresse);
}

export async function deleteAdresse(pId) {
  return await adresseRepository.remove(pId);
}

export async function getAllAdresses() {
  return await adresseRepository.getAll();
}

export async function getAdresseById(pId) {
  return await adresseRepository.findById(pId);
}

export async function updateAdresse(pId, pUpdateEntity) {
  return await adresseRepository.update(pId, pUpdateEntity);
}
