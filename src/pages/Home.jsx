import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import TodoTemplate from '../components/TodoTemplate';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';

export default function Home({ todos, dispatch }) {
  const [loading, setLoading] = useState(true); // 초기 값을 true로 하여 Loading 컴포넌트 보이게끔

  const mainApi = async () => {
    try {
      const response = await fetch(`http://localhost:3001/todos`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('mainData', result);
        setLoading(false);
      } else {
        throw new Error('서버 요청 실패'); // Error: 자바스크립트에서 제공하는 object 중 하나
      }
    } catch (error) {
      setLoading(false);
      window.alert('실패하였습니다'); // alert, confirm, prompt 차이점 - alert: 단순 경고(닫기만), confirm: 확인(true), 취소(false), prompt: input 박스 있음. 확인, 취소
    }
  };

  // 이렇게 작성하면 Loading 컴포넌트 안보임
  // useEffect(() => {
  //   mainApi();
  // }, []);

  // 3초 동안 Loading 컴포넌트 보인 후 -> mainApi 실행
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      // mainApi();
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <TodoTemplate>
          <TodoInsert dispatch={dispatch} />
          <TodoList todos={todos} dispatch={dispatch} />
        </TodoTemplate>
      )}
    </div>
  );
}
