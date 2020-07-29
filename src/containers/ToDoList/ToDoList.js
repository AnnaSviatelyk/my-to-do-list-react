import React, { Component } from 'react';
import { connect } from 'react-redux'
import './ToDoList.scss';
import Header from '../../components/Header/Header'
import illustration from '../../assets/illustration.svg'
import AddTaskBtn from '../../components/Buttons/addNewTaskButton'
import Tasks from '../../components/Tasks/Tasks'
import AddTask from '../../components/AddTask/AddTask'
import * as actions from '../../store/actions/index'


class ToDoList extends Component {
    state = {
        isShownAddTaskInput: false,
        addInputValue: '',
    }

    componentDidMount() {
        this.props.onFetchTasks(this.props.token, this.props.userId)
    }


    addNewTaskBtnHandler = () => { this.setState({ isShownAddTaskInput: true }) }

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
            const newTask = {
                description: this.state.addInputValue,
                userId: this.props.userId
            }

            this.props.postTasks(this.props.token, newTask)
            this.setState({
                isShownAddTaskInput: false,
                addInputValue: ''
            })
        }
    }


    render() {
        return (
            <div>
                <Header />
                <img src={illustration} alt="time management illustration" className="illustration" />
                <Tasks tasks={this.props.tasks} />
                {this.state.isShownAddTaskInput ?
                    <AddTask
                        cancelClick={this.cancelAddingTaskHandler}
                        value={this.state.addInputValue}
                        onChange={this.addInputChangeHandler}
                        onAdd={this.addTaskBtnHandler}
                    /> : <AddTaskBtn click={this.addNewTaskBtnHandler}>Add new task</AddTaskBtn>}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.todo.tasks,
        token: state.auth.token,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postTasks: (token, tasks, userId) => dispatch(actions.postTask(token, tasks, userId)),
        onFetchTasks: (token, userId) => dispatch(actions.fetchTasks(token, userId))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
