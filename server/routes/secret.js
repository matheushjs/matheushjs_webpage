const express = require("express");
const router = new express.Router();
const multer = require("multer");
const fs = require("fs");
const logger = require("../utils/logger.js");

var storage = multer.diskStorage({ destination: null, filename: null });
const upload = multer({ storage: storage });
const dbUsers = require("../model/db_users");

const SECRET_AUTH = {
  "/": ["walwal20"],
  "/all_users": ["walwal20"],
  "/upload_file": ["walwal20"]
};

// Middleware for always checking if the user is authorized to access such page
router.use(async (req, res, next) => {
  // req.url is the path relative to secret/; e.g. '/all_users' or '/really_secret/page1'
  var users = SECRET_AUTH[req.url];

  if(users && users.indexOf(req.session.username) >= 0){
    return next();
  }

  res.renderer.messagePage("Sorry, you don't have permission to visit this special page.");
  return null;
});

router.get("/all_users", async (req, res) => {
  var users = await dbUsers.allUsers();
  res.renderer.allUsers(users);
});

router.get("/upload_file", async (req, res) => res.renderer.render("secret/upload_file.njs"));
router.post("/upload_file", upload.array("file-to-upload"), async (req, res, next) => {
  req.files.forEach(file => {
    fs.copyFile(file.path, "public/data/" + file.originalname, err => {
      if(err){
        logger.error("Error on file uploading. " + String(err));
        next(err);
        return;
      }
    });
    fs.unlink(file.path, err => {
      if(err) logger.error("Could not unlink file." + String(err));
    });
  });
});

router.get("/", async (req, res) => {
  res.renderer.secret(req.visitorCounter);
});

module.exports = {
  router,
  users: SECRET_AUTH["/"], // We export users that have secret pages
};
