import express from "express";
const router = express.Router();
import * as enrollmentService from "../service/enrollment-service.js";

import asyncHandler from "express-async-handler";

router.get(
  "/:id",
  asyncHandler(async (req, res, next) =>
    res
      .status(200)
      .send(await enrollmentService.getEnrollmentById(req.params.id))
  )
);
router.post(
  "/",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await enrollmentService.createEnrollment(req.body))
  )
);
router.delete(
  "/:id",
  asyncHandler(async (req, res, next) =>
    res
      .status(200)
      .send(await enrollmentService.deleteEnrollment(req.params.id))
  )
);

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    let enrollments = await enrollmentService.getAllEnrollments();
    res.status(200).send(enrollments);
  })
);

router.get(
  "/hilfestelles/:hilfestelleId",
  asyncHandler(async (req, res, next) => {
    let enrollments = await enrollmentService.getEnrollmentsByHilfestelleId(
      req.params.hilfestelleId
    );
    res.status(200).send(enrollments);
  })
);

router.get(
  "/kantons/:kantonId",
  asyncHandler(async (req, res, next) => {
    let enrollments = await enrollmentService.getEnrollmentsByKantonId(
      req.params.kantonId
    );
    res.status(200).send(enrollments);
  })
);

router.get(
  "/hilfarts/:hilfartId",
  asyncHandler(async (req, res, next) => {
    let enrollments = await enrollmentService.getEnrollmentsByHilfartId(
      req.params.hilfArtId
    );
    res.status(200).send(enrollments);
  })
);

router.get(
  "/adresses/:adresseId",
  asyncHandler(async (req, res, next) => {
    let enrollments = await enrollmentService.getEnrollmentsByAdresseId(
      req.params.adresseId
    );
    res.status(200).send(enrollments);
  })
);

export default router;
