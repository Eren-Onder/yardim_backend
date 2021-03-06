import * as enrollmentRepository from "../persistency/enrollment-repository.js";
import config from "../environment-config.json";

export async function createEnrollment(penrollment) {
  return await enrollmentRepository.create(penrollment);
}

export async function deleteEnrollment(pId) {
  return await enrollmentRepository.remove(pId);
}

export async function getEnrollmentById(pId) {
  return await enrollmentRepository.findById(pId);
}

export async function updateEnrollment(pId, pUpdateEntity) {
  return await enrollmentRepository.update(pId, pUpdateEntity);
}

export async function getAllEnrollments() {
  return await enrollmentRepository.getAll();
}

export async function getEnrollmentsByHilfestelleId(pHilfestelleId) {
  return await enrollmentRepository.getAllByHilfestelleId(pHilfestelleId);
}
export async function getEnrollmentsByHilfartId(pHilfartId) {
  return await enrollmentRepository.getAllByHilfartId(pHilfartId);
}

export async function getEnrollmentsByKantonId(pKantonId) {
  return await enrollmentRepository.getAllByKantonId(pKantonId);
}
