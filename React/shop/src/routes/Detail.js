import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

function Detail(props) {
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
          <button className="btn btn-danger">주문하기</button>
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

function TabContent(props) {
  if (props.탭 == 0) {
    return <div>내용0</div>;
  } else if (props.탭 == 1) {
    return <div>내용1</div>;
  } else if (props.탭 == 2) {
    return <div>내용2</div>;
  }
}
export default Detail;
