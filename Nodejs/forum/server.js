const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
app.set("veiw engine", "ejs");
const { MongoClient } = require("mongodb");

let db;
const url = "";
new MongoClient(url)
  .connect()
  .then((client) => {
    console.log("DB연결성공");
    db = client.db("forum");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8080, () => {
  console.log("http://localhost:8080 에서 서버 실행중");
});

app.get("/", function (요청, 응답) {
  응답.sendFile(__dirname + "/index.html");
});

app.get("/news", (요청, 응답) => {
  응답.send("오늘 비가 오네요");
});

app.get("/shop", (요청, 응답) => {
  응답.send("쇼핑몰 페이지");
});

app.get("/about", (요청, 응답) => {
  응답.sendFile(__dirname + "/about.html");
});

app.get("/list", async (요청, 응답) => {
  let result = await db.collection("post").find().toArray();
  //   console.log(result);
  응답.render("list.ejs", { 글목록: result });
});
