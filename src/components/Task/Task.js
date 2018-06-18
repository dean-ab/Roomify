import React, { Component } from 'react';


class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tag: this.props.tag,
            price: this.props.price,
            date: new Date(),
            description: this.props.description
        }
    }
    
    render() {
        return (<p><strong>{this.state.tag}</strong> on {this.state.date.toLocaleDateString('en-US')} {this.state.price} and {this.state.description}</p>);
    }
}

export default Task;