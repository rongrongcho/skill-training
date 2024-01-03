import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // 자료 잠깐 저장할 땐 변수,state 문법 사용
  // state 만드는 법 
  // 1. import{useState}
  // 2. userState(보관할 자료)
  // 3. let[작명,작명]
  let post = '강남 우동 맛집'; 
  let [글제목1,b]=useState('남자 코트 추천');
  let [글제목2,c]=useState('강남 우동 맛집');
  let [글제목3,d]=useState('파이썬 독학');
  // 글제목은 state에 보관했던 자료 
  // b는 state 변경을 도와주는 함수 
  //distructing 문법을 사용했기 때문에 뒤에 함수가 생략되어있음
  // let[글제목,b] =userState('남자 코트 추천',함수)


  return (
    //retrun ()안에는 병렬로 태그2개 이상 기입금지 
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        {/* 남자 코트 추천 출력 */}
        <h4>{글제목1}</h4> 
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        {/* 남자 코트 추천 출력 */}
        <h4>{글제목2}</h4> 
        <p>2월 17일 발행</p>
      </div>
            <div className='list'>
        {/* 남자 코트 추천 출력 */}
        <h4>{글제목3}</h4> 
        <p>2월 17일 발행</p>
      </div>
    </div>
    
  );
}

export default App;
