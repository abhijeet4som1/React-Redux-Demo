import React from 'react';
import Header from '../Header/Header';
import TaskContainer from '../TaskContainer/TaskContainer';
class Landing extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Header/>
        <TaskContainer/>
      </div>
    )
  }

}

export default Landing;
