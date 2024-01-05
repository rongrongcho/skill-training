import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; 
  let [글제목,글제목변경]=useState(['남자코트 추천','강남 우동맛집','파이썬 독학']);
  let [따봉,따봉변경]=useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={()=>{
        let arr=[1,2,3];
        let copy=[...글제목];
        copy[0]='여자코트 추천';
        글제목변경(copy);
      }}>글제목변경</button>

      {/* 
        state 변경함수 특징 
        기존 state == 신규 state의 경우 변경 (x) 
        왜? 자원절약
        array/object 특징
        array/objects 담은 변수엔 1,2,3이 ram 어디에있는지 알려주는 화살표만 저장됨 
        이러한 원리 때문에 
        글제목[0] = '여자코트 추천';
        글제목변경(글제목);
        이라고 코드를 짰을 때 코드가 실행되지 않은 거임
        왜냐? array를 수정했지 변수에 있던 화살표는 수정이 안됨.
        그래서 기존 state랑 신규 state 둘다 글제목에 저장되어있던 화살표 바뀐적 없기 때문에 동일하게 보고 
        실행되지 않는다. 
        let copy=글제목;
        copy[0]='여자코트 추천';
        글제목변경(copy);
        이 코드 역시 실행되지 않는다. 
        글제목이라는 state를 copy 변수에 복사를 했다. 
        글제목에 저장되어있는 것은 array 데이터가 아니라 화살표다.
        그래서 copy 변수 역시 똑같은 화살표를 복사해서 가지고 있는게 된다!
        변수1&변수2 화살표가 같으면 변수1==변수2 비교해도 true로 나온다. 
        그렇기 때문에 기존 state가 변경되지 않았다고 컴퓨터는 판단한다. 
        즉, copy와 글제목은 같다. 

        let copy = [...글제목]; 은 왜 실행이 되는걸까?
        ... 문법은 괄호를 벗겨주세요 라는 의미를 가지고 있다. 
        [...] == 괄호를 벗겨주고 다시 괄호를 씌워주세요~ 라는 문법이다 
        즉 완전히 독립적인 array 사본이 생성된다. 

        총정리 
        기존 state가 array/object면 독립적 카피본(shallow copy)을 만들어서 수정해야한다.
      */}
      <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍🏻</span> {따봉} </h4> 
        
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>

        <h4>{글제목[1]}<span onClick={()=>{따봉변경(따봉+1)}}>👍🏻</span> {따봉}</h4> 
        <p>2월 17일 발행</p>
      </div>
            <div className='list'>

        <h4>{글제목[2]}<span onClick={()=>{따봉변경(따봉+1)}}>👍🏻</span> {따봉}</h4> 
        <p>2월 17일 발행</p>
      </div>
    </div>
    
  );
}

export default App;
