import logo from './logo.svg';
import './App.css';

function App() {
  //변수 선언 , 서버에서 가져온 데이터로 가정한다.
  let post = '강남 우동 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      {/* 중괄호 문법 ,데이터 바인딩*/}
      {/* JSX 문법을 이용한 Style 넣기  */}
      <h4 style={{color:'red',fontSize:'16px'}}>{post}</h4> 
    </div>
  );
}

export default App;
