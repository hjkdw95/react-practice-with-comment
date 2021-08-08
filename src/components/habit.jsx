import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    }
    
    handleIncrement = () => {
        /* state object의 count 1 증가한 뒤, state를 업데이트 한다 */
        this.setState({count: this.state.count + 1});
    }

    handleDecrement = () => {
        const count = this.state.count - 1;
        this.setState({count: count < 0 ? 0 : count}); /* obj 내에서 삼항연산자 사용 가능 */
    }

    render() {
        const {name, count} = this.props.habit; /* props의 habit obj 안에 있는 name, count를 각각 변수로 끌어와라 */
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span> {/* 이 state안에 저장된 count라는 녀석을 보여줘라 */}
                <button className="habit-button habit-increase" onClick={this.handleIncrement}> {/* 클릭하면 handleIncrement 함수를 호출해라 */}
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-trash">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        )
    }
}

export default Habit;