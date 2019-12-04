import React, { Component } from 'react'

class MadlibForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: props.form
        }
    }
    
    handleChange = (event)=>{
        const{ form } = this.state
        //form["name1"] = "Bob"
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }
    
    handleSubmit = ()=>{
        this.props.onSubmit(this.state.form)
    }
    
    render(){
        return(
        <div>
            <div>
                <label>A Verb:</label>
                <input
                    name="verb1"
                    value={this.state.form.verb1}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <label>A Noun:</label>
                <input
                    name="noun1"
                    value={this.state.form.noun1}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <label>A adjective:</label>
                <input
                    name="adjective1"
                    value={this.state.form.adjective1}
                    onChange={this.handleChange}
                />
                
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
        </div>
        )
    }
}

export default MadlibForm