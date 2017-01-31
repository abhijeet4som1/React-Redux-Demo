import React from 'react';
import Header from '../Header/Header';
import TaskContainer from '../TaskContainer/TaskContainer';
class Landing extends React.Component{

  constructor(props){
    super(props);
  }

  componentWillMount(){
    console.log("component will mount method");
  }

  render(){
    console.log("render method");
    return(
      <div>
        <Header/>
        <TaskContainer/>
      </div>
    )
  }

  componentDidMount(){
    console.log("componet did mount method");
  }

}

export default Landing;
