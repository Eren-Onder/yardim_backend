import express from "express";

// Middlewares
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

// Routers
import hilfestellesRouter from "./routes/hilfestelle-routes.js";
import kantonsRouter from "./routes/kanton-routes.js";
import enrollmentsRouter from "./routes/enrollment-routes.js";
import adressesRouter from "./routes/adresse-routes.js";
import hilfartsRouter from "./routes/hilfart-routes.js";
import jwt from "jsonwebtoken";
import { generateToken, getCleanUser } from "./utils.js";

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/hilfestelles", hilfestellesRouter);
app.use("/kantons", kantonsRouter);
app.use("/enrollments", enrollmentsRouter);
app.use("/adresses", adressesRouter);
app.use("/hilfarts", hilfartsRouter);

const port = process.env.PORT || 4000;
// static user details
const userData = {
  userId: "789789",
  password: "123456",
  name: "Clue Mediator",
  username: "cluemediator",
  isAdmin: true,
};

//middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers["authorization"];
  if (!token) return next(); //if no token, continue

  token = token.replace("Bearer ", "");
  jwt.verify(
    token,
    process.env.REACT_APP_AUTH0_CLIENT_ID,
    function (err, user) {
      if (err) {
        return res.status(401).json({
          error: true,
          message: "Invalid user.",
        });
      } else {
        req.user = user; //set the user to req so other routes can use it
        next();
      }
    }
  );
});

// request handlers
app.get("/", (req, res) => {
  if (!req.user)
    return res
      .status(401)
      .json({ success: false, message: "Invalid user to access it." });
  res.send("Welcome to the Node.js Tutorial! - " + req.user.name);
});

// validate the user credentials
app.post("/signin", function (req, res) {
  const user = req.body.username;
  const pwd = req.body.password;

  // return 400 status if username/password is not exist
  if (!user || !pwd) {
    return res.status(400).json({
      error: true,
      message: "Username or Password required.",
    });
  }

  // return 401 status if the credential is not match.
  if (user !== userData.username || pwd !== userData.password) {
    return res.status(401).json({
      error: true,
      message: "Username or Password is Wrong.",
    });
  }

  // generate token
  const token = utils.generateToken(userData);
  // get basic user details
  const userObj = utils.getCleanUser(userData);
  // return the token along with user details
  return res.json({ user: userObj, token });
});

// verify the token and return it if it's valid
app.get("/verifyToken", function (req, res) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token;
  if (!token) {
    return res.status(400).json({
      error: true,
      message: "Token is required.",
    });
  }
  // check token that was passed by decoding token using secret
  jwt.verify(
    token,
    process.env.REACT_APP_AUTH0_CLIENT_ID,
    function (err, user) {
      if (err)
        return res.status(401).json({
          error: true,
          message: "Invalid token.",
        });

      // return 401 status if the userId does not match.
      if (user.userId !== userData.userId) {
        return res.status(401).json({
          error: true,
          message: "Invalid user.",
        });
      }
      // get basic user details
      var userObj = utils.getCleanUser(userData);
      return res.json({ user: userObj, token });
    }
  );
});

app.listen(port, () => {
  console.log("Server started on: " + port);
});
