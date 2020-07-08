import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header/Header'
import illustration from '../assets/illustration.svg'
import AddTaskBtn from '../components/Buttons/AddTaskBtn'
import Tasks from '../components/Tasks/Tasks'
import AddTask from '../components/AddTask/AddTask'
import { makeid } from '../helpers/helpers'
import TaskContext from '../context/task-context'

class App extends Component {
  state = {
    tasks: JSON.parse(localStorage.getItem('myTasks')) || [],
    isShownAddTaskInput: false,
    addInputValue: '',

  }

  addNewTaskBtnHandler = () => {
    this.setState({ isShownAddTaskInput: true })

  }

  cancelAddingTaskHandler = () => {
    this.setState({
      isShownAddTaskInput: false,
      addInputValue: ''
    })
  }

  addInputChangeHandler = (event) => {
    this.setState({
      addInputValue: event.target.value
    })

  }

  addTaskBtnHandler = (length) => {
    if (length > 0) {
      const tasks = [...this.state.tasks]
      tasks.push({
        description: this.state.addInputValue,
        id: makeid()
      })

      this.setState({
        tasks: tasks,
        isShownAddTaskInput: false,
        addInputValue: ''
      })

      localStorage.setItem('myTasks', JSON.stringify(tasks))
    }
  }

  finishedOrDeletedClickHandler = (id) => {
    const tasks = [...this.state.tasks]
    const updatedTasks = tasks.filter(cur => cur.id !== id)

    this.setState({
      tasks: updatedTasks
    })

    localStorage.setItem('myTasks', JSON.stringify(updatedTasks))
  }


  taskUpdateHandler = (value, id) => {
    const tasks = [...this.state.tasks]
    tasks.forEach(cur => {
      if (cur.id === id) {
        cur.description = value
      }
    })

    this.setState({
      tasks: tasks
    })

    localStorage.setItem('myTasks', JSON.stringify(tasks))
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <img src={illustration} alt="time management illustration" className="illustration" />
        <TaskContext.Provider value={{
          finishedOrDeletedClickHandler: this.finishedOrDeletedClickHandler,
          onUpdate: this.taskUpdateHandler
        }}>
          <Tasks
            tasks={this.state.tasks}
          />
        </TaskContext.Provider >
        {this.state.isShownAddTaskInput ?
          <AddTask
            cancelClick={this.cancelAddingTaskHandler}
            value={this.state.addInputValue}
            onChange={this.addInputChangeHandler}
            onAdd={this.addTaskBtnHandler}
          /> : <AddTaskBtn click={this.addNewTaskBtnHandler} />}

      </div>
    );
  }
}

export default App;
