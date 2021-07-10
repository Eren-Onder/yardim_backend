import express from "express";
const router = express.Router();
import * as kantonService from "../service/kanton-service.js";
import asyncHandler from "express-async-handler";

router.get(
  "/",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await kantonService.getAllKantons())
  )
);
router.get(
  "/:id",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await kantonService.getKantonById(req.params.id))
  )
);
router.post(
  "/",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await kantonService.createKanton(req.body))
  )
);
router.delete(
  "/:id",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await kantonService.deleteKanton(req.params.id))
  )
);

export default router;
