import React, { Component } from 'react';
import './Menu.css';
import Task from '../Task';
import Form from '../Form';

class Menu extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      tasksList: [], 
      currTaskType: undefined,
      numOfTasks: 0
    }
  }

  handleSelect(event) {
    event.preventDefault();
    this.setState({
      currTaskType: event.target.value
    })
  }

  handleSubmit(newTask) {
    
    this.setState({
      tasksList: [newTask].concat(this.state.tasksList),
      numOfTasks: this.state.numOfTasks + 1
    })
  }

  chooseTaskForm(taskType) {
    return taskType === undefined ? '' :
    taskType === "house-rent" ? <Form name={"House Rent"} type={"periodic"} submitHandler={this.handleSubmit}/> :
    taskType === "electricity" ? <Form name={"Electricity"} type={"periodic"} submitHandler={this.handleSubmit}/> :
    taskType === "water" ? <Form name={"Water"} type={"periodic"} submitHandler={this.handleSubmit}/> :
    taskType === "cable-tv" ? <Form name={"Cable-TV"} type={"periodic"} submitHandler={this.handleSubmit}/> :
    taskType === "municipal-rate" ? <Form name={"Municipal Rate (Arnona)"} type={"periodic"} submitHandler={this.handleSubmit}/> :
    taskType === "gas" ? <Form name={"Gas"} type={"periodic"} submitHandler={this.handleSubmit}/> :
    taskType === "house-committee" ? <Form name={"House Committee"} type={"periodic"} submitHandler={this.handleSubmit}/> :
    taskType === "shopping" ? <Form name={"Shopping"} type={"once"} submitHandler={this.handleSubmit}/> :
    taskType === "internet" ? <Form name={"Internet"} type={"periodic"} submitHandler={this.handleSubmit}/> :
    <Form name={"Transmission"} type={"once"} submitHandler={this.handleSubmit}/> 
  }

  render() {
    const renderedTasks = this.state.tasksList.map((task) =>
                          <Task key={task.key} tag={task.name} price={task.price} description={task.description} 
                          period={task.period} whosPaid={task.whosPaid} relevantTo={task.relevantTo}/>);
    return (
      <div className="topMenu">
        <select onChange={this.handleSelect}>
          <option value="house-rent">House Rent</option>
          <option value="electricity">Electricity</option>
          <option value="water">Water</option>
          <option value="cable-tv">Cable TV</option>
          <option value="municipal-rate">Municipal Rate</option>
          <option value="gas">Gas</option>
          <option value="house-committee">House Committee</option>
          <option value="shopping">Shopping</option>
          <option value="internet">Internet</option>
          <option value="transmission">Transmission</option>
        </select>
        {this.state.currTaskType === undefined ? null : this.chooseTaskForm(this.state.currTaskType)}
        {this.state.tasksList.length === 0 ? null : renderedTasks}
      </div>
    );

  }
}

export default Menu;