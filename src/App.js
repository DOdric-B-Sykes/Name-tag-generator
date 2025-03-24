import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  state = {
    names: ["Erin", "Ann", "Nichole", "Sharon", "Maryn"],
  };

  addName = (name) => {
    const newNames = [name, ...this.state.names];
    // Using "...this.state.names" is an example of spread syntax (mainly that "..." before the variable/property name)
    this.setState({ names: newNames });
    // setState is used here because I wanted to update the state following the code above it
  };

  removeName = (clickedIndex) => {
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    // to learn how the .filter method works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
    this.setState({ names: newNames });
    // When this.setState is called, The array of names within state are updated with new names.
  };

  componentDidUpdate() {
    const savedNamesString = JSON.stringify(this.state.names);
    // Will turn my "names" array into a string so it can be saved to the local storage of the browser
    localStorage.setItem("savedNames", savedNamesString);
    // Will save the state to the local storage in the browser
    // Since you set the value of savedNamesString to be a stringified version of state, you should save savedNamesString to local storage.
  }

  componentDidMount() {
    const savedNamesString = localStorage.getItem("savedNames");
    // The above code will pull/retrieve the "savedNames" data from the local storage via .getItem
    if (savedNamesString) {
      const savedNames = JSON.parse(savedNamesString);
      // The above code is parsing or "returning" the converted data type back into its original data type
      this.setState({ names: savedNames });
      // Is setting the state now to the value of "savedNames"
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName} />
        {/*"addName" is used here as a prop to pass a reference to the addName method/function in the UserInput component */}
        <NameTagList names={this.state.names} removeName={this.removeName} />
        {/* props 'removeName" are used to pass a reference to your removeName method in the NameTagList component. */}
      </div>
    );
  }
}

// How data is flowing through the different modules/components: It passes the addName function to the UserInput component so that, when the user submits a name, state within the UserInput component is updated, then the addName function is called so the names in the App component’s state can be updated.
// How data is flowing through the different modules/components: The App component passes the names and removeName function to the NameTagList component. The NameTagList component both creates the list of name tags and passes the names and function to the NameTag component so that it has the data it needs for each individual name tag.
// How data is flowing through the different modules/components: Something important to keep in mind is that the names and the addName and removeName functions are all passed as props down to the UserInput, NameTagList, and NameTag components – giving those components the data they need to create a UI with an input field, a list of notes, and individual notes that can be removed.

export default App;
