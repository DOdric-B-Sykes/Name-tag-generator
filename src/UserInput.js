import React, { Component } from "react";

class UserInput extends Component {
  state = {
    name: [],
  };

  updateName = (event) => {
    this.setState({ name: event.target.value });
  };
  // Used "setState" here because I want to use this arrow function to update the state any time this event is triggered
  // "updateName" arrow function/method is needed to update the "name" state to the event's target value -> this is the EVENT HANDLER

  handleSubmit = (event) => {
    event.preventDefault();
    // "preventDefault( )" will keep the page from refreshing when the state is changed (meaning that when the state of the input "text box" is changed by inputting letters/numbers into text box space and the event needs to be listened for and handled
    this.props.addName(this.state.name);
    // Used "this.props.addName" here because I want to call this function using aided by props from the original addName function in the App.js module/component
    this.setState({
      name: "",
    });
    // Writing the above code this way will prevent the page from refreshing when the state is changed (text is inputted into text field box) by listening for the event (change of the state) to take place -> will also return the text field box to any empty string when the event is handled (text is submitted) via a button push
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a new name here..."
            onChange={this.updateName}
            value={this.state.name}
          />
          {/* Use the value attribute to ensure that your input element will display the value we have in state */}
          <input type="submit" value="Create name tag" />
          {/* By setting the `value` attribute of the input element to `{this.state.name}`, you are correctly binding the value of the input field to the `name` property in the component's state. This will display the current value of the `name` property in the input element. */}
          {/* The "this" keyword is accessing the "UserInput" component since it's also considered an object -> this is essentially stating: " I want to access the state and name properties/variables via the User Input method or function /component/object */}
          {/* "OnChange" and "onSubmit" are the event listeners */}
        </form>
      </div>
    );
  }
}

// "UserInput" component will handle rendering the text input field

export default UserInput;
