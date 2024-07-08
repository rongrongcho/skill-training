import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, increase } from "./../store/userSlice.js";
import { addCount } from "../store.js";
import { memo, useState } from "react";

let Child = memo(function () {
  console.log("재렌더링됨");
  return <div>자식임</div>;
});

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);

  return (
    <div>
      <Child></Child>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        랜더링테스트
      </button>
      {state.user.name}의 장바구니
      <button
        onClick={() => {
          dispatch(increase(100));
        }}
      >
        {state.user.age}
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
