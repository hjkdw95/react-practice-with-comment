import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {name: "Reading", count: 0 },
            {name: "Running", count: 0 },
            {name: "Coding", count: 0}
        ],
    }
    render() {
        return <ul>
            {this.state.habits.map(habit => (
                <Habit habit = {habit} /> /* 인자로 들인 object를 props로 전달 */
            ))};
        </ul>
    }
}

export default Habits;