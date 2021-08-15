import React, { useState } from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0); // useState를 사용하면, class에서 생성한 state정보를 가져올 수 있다.
  // useState를 사용할 때는 const 변수를 2가지 지정해줘야 한다 1.실제 state 값과, 2.state를 업데이트 할 수 있는 setState같은 함수를 반환한다

  const handleIncrement = () => {
    setCount(count + 1); // 오브젝트로 인자 넣어주는 것이 아니다!
  };

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
