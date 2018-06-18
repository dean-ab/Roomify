import React, { Component } from 'react';
import './Form.css';
import { Button } from 'semantic-ui-react';



class Form extends Component {

  constructor(props) {
    super(props);
    this.getFormType = this.getFormType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      types: {
        periodic: {
          price: true,
          description: true,
          period: true,
          whosPaid: true,
          relevantTo: false
        },
        once: {
          price: true,
          description: true,
          period: false,
          whosPaid: true,
          relevantTo: true
        }
      },
      formType: this.props.type,
      runningInteger: 0
    };
  }
  
  componentDidMount() {
    this.setState({
      formType: this.getFormType(this.props.type)
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.setState({
        formType: this.getFormType(this.props.type)
      })
    }
  }

  getFormType(type) {
    return type === "periodic" ? this.state.types.periodic :
    type === "once" ? this.state.types.once :
    "Never"
  }

  handleSubmit(event) {
    event.preventDefault();
    const task = this.refs.taskForm;
    const newTask = {
          name: this.props.name,
          price: task.price ? task.price.value : undefined,
          description: task.description ? task.description.value : undefined,
          period: task.period ? task.period.value : undefined,
          whosPaid: task.whosPaid ? task.whosPaid.value : undefined,
          relevantTo: task.relevantTo ? task.relevantTo.value : undefined,
          key: this.state.runningInteger
    };
    this.setState({
      runningInteger: this.state.runningInteger + 1
    });
    this.props.submitHandler(newTask);
    this.refs.taskForm.reset();
  }

  render() {
    const formType = this.state.formType;
    return (
      <form onSubmit={this.handleSubmit} ref="taskForm">
        <h2 className="taskTitle">Enter your {this.props.name} details here:</h2>
        <div className="taskForm">
          
          {!formType.price ? null :
          <div>
            <label>Enter Price: </label>
            <input type="text" name="price"/><br/>
          </div>}
          
          {!formType.period ? null :
          <div>
            <label>Enter Period: </label>
            <input type="text" name="period"/><br/>
          </div>}

          {!formType.whosPaid ? null :
          <div>
            <label>Already paid? </label> 
            <input type="checkbox" name="whosPaid"/>
          </div>}

          {!formType.relevantTo ? null :
          <div>
            <label>Relevant to: </label>
           <input type="text" name="relevantTo"/><br/>
          </div>}
          
          {!formType.description ? null :
          <div>
            <label>Enter Description: </label>
            <input type="text" name="description"/><br/>
          </div>}

          <Button content="Submit" />

          <span className="validity"></span>
        </div>
      </form> 
    );
  }
}

export default Form;
