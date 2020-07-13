import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard/Employee";
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper/Wrapper";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employee to the employees json array
  state = {
    employees
  };

  // Map over this.state.employee and render a EmployeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;