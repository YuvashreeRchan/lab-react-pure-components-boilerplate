import { PureComponent } from 'react'

export default class PureCounterComponent extends PureComponent {

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
        console.log("This is Pure Component")
        return (
            <div>
                <h2>Pure Counter Component</h2>
                <p>{this.state.counter}</p>
                <button onClick={this.handleToggle}>Set Toggle</button>
                <button onClick={this.handleIncrement}>Counter</button>
            </div>

        )
    }
}
