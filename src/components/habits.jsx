import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    handleIncrement = (habit) => {
        /*스스로 처리하기보다는 prop으로 처리 */
        this.props.onIncrement(habit)
    }
    
    handleDecrement = (habit) => {
        this.props.onDecrement(habit)
    }
    
    handleDelete = (habit) => {
        this.props.onDelete(habit)
    }
    
    render() {
        return <ul>
            {this.props.habits.map(habit => (
                <Habit 
                    key = {habit.id} 
                    habit = {habit} 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                /> /* 인자로 들인 object를 props로 전달, 자식 component를 갖게 되니까 props.key도 설정해준다 */
                /* state가 있는곳에서 메소드 다루게 했으니 props로 habit에 보내준다 */
            ))};
        </ul>
    }
}

export default Habits;