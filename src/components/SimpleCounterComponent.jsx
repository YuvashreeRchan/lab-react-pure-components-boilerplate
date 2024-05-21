import React from 'react'

class SimpleCounterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            toggle: false,
        };
    }

    handleToggle = () => {
        this.setState((prevState) => ({
            toggle: !prevState.toggle,
        }));
        };
    
    handleIncrement = () => {
    if (this.state.toggle) {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    }
    };

    render() {
        console.log("This is Simple Component");
        return (
            <div>
                <h2>Simple Counter Component</h2>
                <p>{this.state.counter}</p>
                <button onClick={this.handleToggle}>Set Toggle</button>
                <button onClick={this.handleIncrement}>Counter</button>
            </div>
        )
        }
}

export default SimpleCounterComponent;