import express from "express";
const router = express.Router();
import * as adresseService from "../service/adresse-service.js";

import asyncHandler from "express-async-handler";

router.get(
  "/",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await adresseService.getAllAdresses())
  )
);
router.get(
  "/:id",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await adresseService.getAdresseById(req.params.id))
  )
);
router.post(
  "/",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await adresseService.createAdresse(req.body))
  )
);
router.delete(
  "/:id",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await adresseService.deleteAdresse(req.params.id))
  )
);

export default router;
