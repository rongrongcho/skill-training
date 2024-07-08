import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Context1 } from "./../App.js";
import { addItem } from "../store.js";
import { useDispatch } from "react-redux";
let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

function Detail(props) {
  //보관함 해체 -> 변수에 저장해 사용
  let { 재고, shoes } = useContext(Context1);
  useEffect(() => {
    console.log("안녕");
  });

  //user가 :id 자리에 적은 파라미터를 가져와준다
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });

  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  // UI의 현재 상태를 저장할 state
  let [탭, 탭변경] = useState(0);
  let dispatch = useDispatch();

  //최근 본 상품
  useEffect(() => {
    let 꺼낸거 = localStorage.getItem("watched", [찾은상품.id]);
    꺼낸거 = JSON.parse(꺼낸거);
    꺼낸거.push(찾은상품.id);
    꺼낸거 = new Set(꺼낸거);
    꺼낸거 = Array.from(꺼낸거);
    localStorage.setItem("watched", JSON.stringify(꺼낸거));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, [count]);

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        재랜더링 테스트
      </button>
      <YellowBtn bg="blue">버튼</YellowBtn>

      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(
                addItem({
                  id: 1,
                  name: "Red knit",
                  count: 1,
                })
              );
            }}
          >
            주문하기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />
    </div>
  );
}

function TabContent({ 탭 }) {
  // 탭 state가 변경될 때 마다 end 클래스네임 탈부착
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [탭]);
  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}
export default Detail;
