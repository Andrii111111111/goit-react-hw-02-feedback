// import { render } from "@testing-library/react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Component } from "react";
import { Section } from "./Section/Section";


export class App extends Component  {

   state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  leaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
    

  countTotalFeedback() {
  return this.state.good + this.state.neutral + this.state.bad
  };
  
  countPositiveFeedbackPercentage() {
    return  Math.round( this.state.good /this.countTotalFeedback()  *100)
  }

  render() {
   const { good, neutral, bad} = this.state
  return (
   
    <>
      <Section/>
      <FeedbackOptions good={good}
        neutral={neutral}
        bad={bad}
       leaveFeedback={this.leaveFeedback}
        option ={this.leaveFeedback.option}
      />
      <Statistics good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        percent = {this.countPositiveFeedbackPercentage()}
        />
    </>)

}
}



