import React from 'react';
class TaskAdder extends React.Component{

  constructor(props){
    super(props);
    this.state={tname:''};
    this.addTaskName=this.addTaskName.bind(this);
  }

  addTaskName(event){
    if(event){
      event.persist();
      this.setState({tname:event.target.value});
    }
  }

  render(){
    return(
      <div className="task-add-cont">
        <input type="text" value={this.state.tname} onChange={this.addTaskName}></input>
        <button onClick={this.props.addTaskName.bind(this,this.state.tname)}>Add Task</button>
      </div>
    );
  }
}
export default TaskAdder;
