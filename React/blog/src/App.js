import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() { // 사실 이것도 Component

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

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();//가나다순으로 정렬
        글제목변경(copy);
      }}>글제목정렬</button>


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
      {/* <Modal/> => 컴포넌트  
        </Modal>만 써도 사용가능*/}
      <Modal></Modal>
    </div>
    
  );
}

// Component 만들기 1. function 만들기 (위치: 다른 function 바깥) & 작명: 영어대문자
function Modal(){
  // Component 만들기 2. retrun()안에 html 담기
  return(
    <div className="modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p> 
    </div>
  )
}

export default App;
