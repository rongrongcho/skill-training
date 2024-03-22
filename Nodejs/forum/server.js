const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
app.use(express.static(__dirname + "/public"));
app.set("veiw engine", "ejs");
//요청.body 쓰려면 필요한 코드 2줄
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let db;
const url =
  "mongodb+srv://admin:qwer1234@cluster0.ytowxeo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
  응답.render("list.ejs", { 글목록: result });
});
app.get("/write", (요청, 응답) => {
  응답.render("write.ejs");
});
app.post("/add", async (요청, 응답) => {
  await db
    .collection("post")
    .insertOne({ title: 요청.body.title, content: 요청.body.content });
  응답.redirect("/list");
});
