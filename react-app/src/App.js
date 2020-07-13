import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard/Employee";
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper/Wrapper";
import employees from "./employees.json";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  // Setting this.state.employee to the employees json array
  state = {
    employees
  };

  // handleSearch = () => {
  //   console.log(this.props);
  // }

  // Map over this.state.employee and render a EmployeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        <SearchBar />
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
            species={employees.species}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;