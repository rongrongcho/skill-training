import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import bg from "./img/main-bg.jpg";
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoppingMallPJ</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  <Card shoes={shoes[0]} i={1} />
                  <Card shoes={shoes[1]} i={2} />
                  <Card shoes={shoes[2]} i={3} />
                </div>
              </div>
            </>
          }
        ></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
        <Route
          path="*"
          element={<div>404 ! 존재하지 않는 페이지 입니다.</div>}
        ></Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보 </h4>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
