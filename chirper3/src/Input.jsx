import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        //this.handleClick = this.handleClick.bind(this);

        this.state = {
            textInput: '',
            nameInput: ''
        }
    }

    onInputChange = (value) => {
        this.setState({ textInput: value })
        this.setState({nameInput: value});

    }

    render() {
        return (
            
            <React.Fragment>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"
                        placeholder="Chirper Name"
                        value={this.state.nameInput}
                        onChange={(event) => this.onInputChange(event.target.value)}
                    />
                </div>

                <div className="input-group">
                    <textarea className="form-control" aria-label="With textarea"
                        placeholder="Chirp Message"
                        value={this.state.textInput}
                        onChange={(event) => this.onInputChange(event.target.value)}
                    />
                </div>
                <button onClick={this.handleClick}>Click Me</button>
            </React.Fragment>
        );
    }
}
export default Input;