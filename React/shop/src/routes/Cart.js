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
          {state.cart.map((a, i) => {
            <tr key={i}>
              <th>{i}</th>
              <th>{state.cart[i].name}</th>
              <th>안녕</th>
              <th>안녕</th>
            </tr>;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
