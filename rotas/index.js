const express = require("express");
const router = require("express").Router();
const path = require("path");

router.use("/", require("./participante"));


module.exports = router;