import React, { PureComponent } from 'react';

class Habit extends PureComponent {    
    /* props로 전달된 콜백함수들이 버튼 클릭되면 활성화되도록 한다 */
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
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
                <button className="habit-button habit-trash" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        )
    }
}

export default Habit;