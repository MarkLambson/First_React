import React, { Component } from 'react';

class MenuItems extends Component {
    constructor(props) {
        super(props);
        this.state = {price: this.props.price}
    }
    render() {
        return (
            <div>
                <h2>Name: {this.props.dishName}</h2>
                <h3>Price: ${this.state.price}</h3>
                <h5>{this.props.children}</h5>
                <button onClick={() => this.setState({price: this.state.price + 1})}>Inflation!</button>
            </div>
        );
    }
}

export default MenuItems; 