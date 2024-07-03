import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let state = useSelector((state) => state);

  return (
    <div>
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
          {state.cart.map()}
          <tr>
            <th>1</th>
            <th>{state.cart[0].name}</th>
            <th>{state.cart[0].count}</th>
            <th>안녕</th>
          </tr>
          <tr>
            <td>2</td>
            <td>{state.cart[1].name}</td>
            <td>{state.cart[1].count}</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
