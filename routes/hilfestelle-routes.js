import express from "express";
const router = express.Router();
import * as hilfestelleService from "../service/hilfestelle-service.js";
import asyncHandler from "express-async-handler";

router.get(
  "/",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await hilfestelleService.getAllHilfestelles())
  )
);
router.get(
  "/:id",
  asyncHandler(async (req, res, next) =>
    res
      .status(200)
      .send(await hilfestelleService.getHilfestelleById(req.params.id))
  )
);

router.get(
  "/",
  asyncHandler(async (req, res, next) =>
    res
      .status(200)
      .send(
        await hilfestelleService.getByAdminEmailHilfestelles(req.query.userInfo)
      )
  )
);

router.post(
  "/",
  asyncHandler(async (req, res, next) =>
    res.status(200).send(await hilfestelleService.createHilfestelle(req.body))
  )
);
router.delete(
  "/:id",
  asyncHandler(async (req, res, next) =>
    res
      .status(200)
      .send(await hilfestelleService.deleteHilfestelle(req.params.id))
  )
);

export default router;
