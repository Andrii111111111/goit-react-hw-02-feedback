// import { render } from "@testing-library/react";
import { Battons } from "./Battons/Battons";
import { Statistics } from "./Statistics/Statistics";
import { Component } from "react";


export class App extends Component  {

   state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  counter = newValue => {
   
    this.setState((prevState) => {
    
      return {
        good: prevState.good + 1,
        neutral: prevState.neutral + 1,
      bad: prevState.bad + 1,
      };
  });
  }
  
    


  render() {
   const { good, neutral, bad} = this.state
  return (
   
    <>
      <Battons good={good}
        neutral={neutral}
        bad={bad}
        counter={this.counter}
        newValue ={this.counter.newValue}
      />
      <Statistics good={good}
        neutral={neutral}
      bad={bad}
      />
    </>)

}
}



