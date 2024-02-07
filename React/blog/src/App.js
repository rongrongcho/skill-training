import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() { 

  let post = '강남 우동 맛집'; 
  let [글제목,글제목변경]=useState(['남자코트 추천','강남 우동맛집','파이썬 독학']);
  let [따봉,따봉변경]=useState(0);
  //UI의 현재상태를 state로 저장
  let [modal,setModal] =useState(false); //닫힌 상태 



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
        copy.sort();
        글제목변경(copy);
      }}>글제목정렬</button>


      <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍🏻</span> {따봉} </h4> 
        
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>

        <h4>{글제목[1]}</h4> 
        <p>2월 17일 발행</p>
      </div>
            <div className='list'>
        <h4 onClick={()=>{ modal == true ? setModal(false):setModal(true)}}>{글제목[2]}</h4> 
        <p>2월 17일 발행</p>
      </div>
      {/* state에 따라 UI가 어떻게 보일지 조건 작상
          true 모달창 오픈 
          false 모달창 닫힘 
          기본값 false  
      */}
      {
        //삼함 연산자 -> 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드 
        modal ==true ? <Modal/> : null
      }
    </div>
    
  );
}


function Modal(){
  return(
    <div className="modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p> 
    </div>
  )
}

export default App;
