import express from "express";

// Middlewares
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

// Routers
import hilfestellesRouter from "./routes/hilfestelle-routes.js";
import kantonsRouter from "./routes/kanton-routes.js";

import adressesRouter from "./routes/adresse-routes.js";
import hilfartsRouter from "./routes/hilfart-routes.js";
import enrollmentsRouter from "./routes/enrollment-routes.js";
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/hilfestelles", hilfestellesRouter);
app.use("/kantons", kantonsRouter);

app.use("/adresses", adressesRouter);
app.use("/hilfarts", hilfartsRouter);
app.use("/enrollments", enrollmentsRouter);
app.listen(4000, () => {
  console.log("Server started on: " + 4000);
});
