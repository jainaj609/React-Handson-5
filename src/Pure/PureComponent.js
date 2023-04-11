import React from 'react'

export default class PureComponent extends React.PureComponent {
    constructor() {
        super();
        this.state = {
          counter: 0
        }

         // The value of Counter is updated to same value during continues interval
    
    setInterval(() => {
        this.setState({
          counter: 0
        }
        );
        console.log(this.state.counter);
      }, 3000);
    }

    render() {
        const style = {
            background: 'rgb(122 73 122)',
            padding: '100px',
            color: 'white',
            fontSize: '1.5em',
            textAlign: 'justify'
        }

        return (
            <div style={style}>
                <h1>Pure Component</h1>
                <p>Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered. Pure Components restricts the re-rendering ensuring the higher performance of the Component
                </p>
                <h3>Features of React Pure Components</h3>

                <ul>
                    <li>
                        Prevents re-rendering of Component if props or state is the same
                    </li>
                    <li>Takes care of “shouldComponentUpdate” implicitly</li>
                    <li>State and Props are Shallow Compared</li>
                    <li>Pure Components are more performant in certain cases</li>
                </ul>
                <p>In the case of Pure Components, the React components do not re-render blindly without considering the updated values of React “props” and “state”. If updated values are the same as previous values, render is not triggered.</p>
                <h3>Example</h3>
                <p>Here I've created one component named "PureComponent" , in which we’re updating the component’s state variable at a continuous interval of one second. With every call to “setState”, we update the counter value to the same value.</p>
                <b>Counter Value: {this.state.counter}</b>
            </div>
        )

    }
}
