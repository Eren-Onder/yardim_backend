import express from "express";
const router = express.Router();
import * as hilfartService from "../service/hilfart-service.js";

import asyncHandler from "express-async-handler";

router.get(
  "/",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await hilfartService.getAllHilfarts())
  )
);
router.get(
  "/:id",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await hilfartService.getHilfartById(req.params.id))
  )
);
router.post(
  "/",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await hilfartService.createHilfart(req.body))
  )
);
router.delete(
  "/:id",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await hilfartService.deleteHilfart(req.params.id))
  )
);

export default router;
