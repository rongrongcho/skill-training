//====Api 분리 작업

const router = require("express").Router();

let connectDB = require("./../database.js");
let db;
connectDB
  .then((client) => {
    console.log("DB연결성공");
    db = client.db("forum");
  })
  .catch((err) => {
    console.log(err);
  });

router.get("/shop/shirts", (요청, 응답) => {
  응답.send("셔츠 판매 사이트");
});

router.get("/shop/pants", (요청, 응답) => {
  응답.send("바지 판매 사이트");
});

module.exports = router;
