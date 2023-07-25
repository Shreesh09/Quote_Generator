import React from "react";
class App extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    handleChange = (event) => {
        this.setState({input: event.target.value});
}

    handleSubmit = () => {
        this.setState((oldState, props) => {
            props.submitMessage(oldState.input);
            return({input: ""});
        })
    }

    render(){
        return (
          <div>
              <h2>Hit Submit To display your message</h2>
              <input value={this.state.input} onChange={this.handleChange} />
              <button onClick={this.handleSubmit}>SUBMIT</button>
              <h3>Your messages:</h3>
              <ul>
                  {
                      this.props.messages.map(
                          (message, id) => (<li key={id}>{message}</li>))
                  }
              </ul>
          </div>
        );
    }
}

export default App;
