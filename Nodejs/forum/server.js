const express = require("express");
const app = express();
const { MongoClient, ObjectId } = require("mongodb");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
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
  console.log(요청.body);

  try {
    if (요청.body.title == "" || 요청.body.content == "") {
      응답.send("공백 저장 불가!! 제목 혹은 내용을 입력해주세요!");
    } else {
      await db
        .collection("post")
        .insertOne({ title: 요청.body.title, content: 요청.body.content });
      응답.redirect("/list");
    }
  } catch (e) {
    console.log(e);
    응답.status(500).send("서버 에러 발생");
  }
});

app.get("/detail/:id", async (요청, 응답) => {
  try {
    let result = await db
      .collection("post")
      .findOne({ _id: new ObjectId(요청.params.id) });
    console.log(요청.params);
    if (result == null) {
      응답.status(404).send("잘못된 url, 비정상적인 접근입니다. ");
    }
    응답.render("detail.ejs", { result: result });
  } catch (e) {
    console.log(e);
    응답.status(404).send("잘못된 url, 비정상적인 접근입니다. ");
  }
});

app.get("/edit/:id", async (요청, 응답) => {
  try {
    let result = await db
      .collection("post")
      .findOne({ _id: new ObjectId(요청.params.id) });

    if (!result) {
      // 요청된 데이터가 존재하지 않는 경우
      return 응답.status(404).send("게시물을 찾을 수 없습니다.");
    }

    console.log(result);
    응답.render("edit.ejs", { result: result });
  } catch (error) {
    // 데이터베이스 쿼리나 연산에서 오류가 발생한 경우
    console.error(
      "데이터베이스에서 게시물을 검색하는 중 오류가 발생했습니다:",
      error
    );
    응답.status(500).send("서버에서 오류가 발생했습니다.");
  }
});

app.put("/edit", async (요청, 응답) => {
  try {
    const { id, title, content } = 요청.body;

    if (!title || !content) {
      // 제목 혹은 내용이 누락된 경우
      return 응답.status(400).send("제목 및 내용을 채워주세요 ");
    }

    await db
      .collection("post")
      .updateOne({ _id: new ObjectId(id) }, { $set: { title, content } });

    응답.redirect("/list");
  } catch (error) {
    // 데이터베이스  오류가 발생한 경우
    console.error(
      "데이터베이스에서 게시물을 업데이트하는 중 오류가 발생했습니다:",
      error
    );
    응답.status(500).send("서버에서 오류가 발생했습니다.");
  }
});

app.post("/abc", async (요청, 응답) => {
  console.log("안녕");
  console.log(요청.body);
});
