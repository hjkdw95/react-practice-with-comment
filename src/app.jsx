import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';


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
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) { // 만약 item의 id가 증가시켜야하는 id(habit id)와 동일할 경우
        return { ...habit, count: habit.count + 1} // habit을 copy하는데 count 부분만 1추가해서 리턴해라 -> 이 방법을 사용하면 render가 필요한 부분만 일어나게 된다
      }
      return item;
    });
    this.setState({ habits });
}

handleDecrement = (habit) => {
  const habits = this.state.habits.map(item => {
    if(item.id === habit.id) {
      const count = habit.count - 1
      return {...habit, count: count < 0 ? 0 : count} // count의 결과 값이 0보다 작을 경우 0이하로 안나타나도록 처리
    }
    return item;
  });
  this.setState({ habits });
}

handleDelete = (habit) => {
    const habits = this.state.habits.filter(function(item) {
        return item.id !== habit.id
    });
    this.setState({habits}); 
}

handleAdd = (name) => {
  const habits = [...this.state.habits, 
    {id: Date.now(),
    name,
    count: 0}]; /* spread operator 사용하면 맨 마지막에 그냥 직접적으로 obj추가해주면 됨 */

  this.setState({habits});
}

handleReset = () => {
  const habits = this.state.habits.map(habit => {
    if(habit.count !== 0) { // habit.count가 0이 아닐때만 반응하게 하여 불필요한 렌더 줄임
      return {...habit, count: 0} 
    }
    return habit;
  })
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
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    )
  }
}

export default App;

