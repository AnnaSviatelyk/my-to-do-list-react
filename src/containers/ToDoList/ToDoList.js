import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './ToDoList.scss';
import Header from '../../components/Header/Header'
import illustration from '../../assets/illustration.svg'
import AddTaskBtn from '../../components/Buttons/TaskButtons/addNewTaskButton'
import Tasks from '../../components/Tasks/Tasks'
import AddTask from '../../components/AddTask/AddTask'
import * as actions from '../../store/actions/index'
import Modal from '../../sharedComponents/Modal/Modal';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { makeid } from '../../helpers/helpers'


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
                userId: this.props.userId,
                key: makeid()
            }

            this.props.postTask(this.props.token, newTask)
            this.setState({
                isShownAddTaskInput: false,
                addInputValue: ''
            })
        }
    }


    render() {
        return (
            <div>
                <Modal
                    show={this.props.error}
                    backDropClick={this.props.onBackdropClick}>
                    <ErrorMessage errorMessage={this.props.error} click={this.props.onBackdropClick} />
                </Modal>
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
        error: state.todo.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postTask: (token, task) => dispatch(actions.postTask(token, task)),
        onFetchTasks: (token, userId) => dispatch(actions.fetchTasks(token, userId)),
        onBackdropClick: () => dispatch(actions.backDropClick())
    }

}

ToDoList.propTypes = {
    tasks: PropTypes.array,
    token: PropTypes.string,
    userId: PropTypes.string,
    error: PropTypes.string,
    postTask: PropTypes.func,
    onFetchTasks: PropTypes.func,
    onBackdropClick: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
