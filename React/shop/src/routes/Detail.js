import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;

let Box = styled.div`
  padding: 20px;
  color: grey;
`;

function Detail(props) {
  //user가 :id 자리에 적은 파라미터를 가져와준다
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  return (
    <div className="container">
      <Box>
        <YellowBtn>버튼</YellowBtn>
      </Box>
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
    </div>
  );
}

export default Detail;
