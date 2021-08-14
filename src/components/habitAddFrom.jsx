import React, { memo } from "react";

/* 함수형 component로 변경하면 this 지옥에서 벗어날 수 있다..! */
const HabitAddFrom = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
  
    const onSubmit = (event) => {
      event.preventDefault(); /*브라우저가 기본으로 submit하면 화면을 리프레쉬하는데 그것을 막는 메소드 */
      const name = inputRef.current.value; /* input의 현재 값을 받아온다 */
      name && props.onAdd(name); /* input에 값이 있으면 그것을 추가해라 */
      formRef.current.reset(); /* form 안에 적혀있는 내용 초기화 */
    };
  
    return (
      /* form에서 버튼을 클릭하면 submit이벤트가 발생한다, 그것을 감지하는 메소드가 onSubmit이다 */
      <form ref={formRef} className="add-form" onSubmit={onSubmit}>
        <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
        <button className="add-button">Add</button>
      </form>
    );
  };);

export default HabitAddFrom;
