import React, { Component } from 'react';
import Habit from './habit';
import HabitAddFrom from './habitAddFrom';

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

    handleAdd = (name) => {
        this.props.onAdd(name);
    }
    
    render() {
        return <>
            <HabitAddFrom 
                onAdd={this.handleAdd}
            />
            <ul>
                {this.props.habits.map(habit => (
                    <Habit 
                        key = {habit.id} 
                        habit = {habit} 
                        name = {habit.name}
                        count = {habit.count} /* 계속 변화하는 것을 따로 떼서 오브젝트로 만든다 */
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    /> /* 인자로 들인 object를 props로 전달, 자식 component를 갖게 되니까 props.key도 설정해준다 */
                    /* state가 있는곳에서 메소드 다루게 했으니 props로 habit에 보내준다 */
                ))}
            </ul>
            <button className="habits-reset" onClick={this.props.onReset}>Reset All</button> {/*reset버튼은 반복되어 사용되지 않기 때문에 컴포넌트화 하지 않는다 - 추후에 필요할 시 컴포넌트화 예정 */}
        </>
    }
}

export default Habits;