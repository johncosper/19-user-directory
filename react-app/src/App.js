import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard/Employee";
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper/Wrapper";
import SortButton from "./components/SortButton/SortButton";
import HumanButton from "./components/FilterButtons/HumanButton/HumanButton";
import NonHumanButton from "./components/FilterButtons/NonHumanButton/NonHumanButton";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employee to the employees json array
  state = {
    employees
  };

  sortEmployeeAlphabetical = () => {
    const employees = [...this.state.employees];
    employees.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({ employees });
  }

  NonHumanFilter = () => {
    // const employees = [...this.state.employees];
    const employees = [...this.state.employees].filter(employee =>  employee.species === 'Non-Human');
    this.setState({ employees });
  }

  HumanFilter = () => {
    // const employees = [...this.state.employees];
    const employees = [...this.state.employees].filter(employee =>  employee.species === 'Human');
    this.setState({ employees });
  }
  // Map over this.state.employee and render a EmployeeCard component for each employee object
  render() {
    return (
      <Wrapper>
        <div style={{marginBottom: '5px'}}>
          <SortButton sortEmployeeAlphabetical={this.sortEmployeeAlphabetical} />
          <HumanButton HumanFilter={this.HumanFilter}/>
          <NonHumanButton NonHumanFilter={this.NonHumanFilter}/>
        </div>
        <Title>Employee List</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
            species={employee.species}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;