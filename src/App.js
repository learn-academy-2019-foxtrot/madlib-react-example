import React from 'react';
import './App.css';

//import the form, so we can nest it in our render
import MadlibForm from './MadlibForm'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showStory: false,
      form:{
        verb1: '',
        noun1: '',
        adjective1: '',
      }
    }
  }
  
  handleFormUpdate = (formValues) =>{
    this.setState({
      form: formValues,
      showStory: true
    })
  }
  
  clear = () => {
    this.setState({
      showStory: false
    })
  }
  
  render(){
    return (
        <>
        <div>Hello World</div>
        <div>
          <h2>Please enter some words.</h2>
          <div>
            {/* pass form from state to Madlib component */}
            <MadlibForm 
              form={this.state.form} 
              onSubmit={this.handleFormUpdate}
            />
          </div>
        </div>
        
        {/* The Story */}
        {this.state.showStory &&
          <div>
            <div>
              The 
              {this.state.form.adjective1} 
              {this.state.form.noun1} 
              {this.state.form.verb1}.
            </div>
            <button onClick={this.clear}>Clear</button>
          </div>
        }
      </>
    );
  }
}
export default App;
