import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/ navbar';


class App extends Component {
  /* state는 항상 최상단에 위치해 있어야 한다 */
  state = {
    habits: [
        {id: 1, name: "Reading", count: 0 },
        {id: 2, name: "Running", count: 0 },
        {id: 3, name: "Coding", count: 0}
    ],
  }

  /* state가 있는 곳에서 method 다루게 할 것 */
  handleIncrement = (habit) => {
    const habits = [...this.state.habits] /*state.habits를 복사 */
    /* 받아온 habit이 몇번째 index에 있는지 확인 */
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits }); /* key, value이름이 동일한 경우 생략 가능 */
}

handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count; /* obj를 직접 건드리는 형태로 좋지 않은 예시이다 */
    this.setState({habits});
}

handleDelete = (habit) => {
    const habits = this.state.habits.filter(function(item) {
        return item.id !== habit.id
    });
    this.setState({habits}); 
}


  render() {
    return (
      <>
      <Navbar 
        totalCount={this.state.habits.filter(item => item.count > 0).length}
      />
      <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;

