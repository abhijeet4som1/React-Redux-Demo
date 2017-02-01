import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {TaskModel} from './TaskHelper';
import TaskAdder from './TaskAdder';
import * as TaskAction from '../../actions/TaskAction';


require('./tasks.css');
class TaskContainer extends React.Component{

  constructor(prop){
    super(prop);
    this.action=bindActionCreators(TaskAction,this.props.dispatch);
    this.addTaskName = this.addTaskName.bind(this);
  }

  addTaskName(taskName){
    this.action.addTask(new TaskModel(taskName));
  }

  render(){
    let content=[];
    this.props.tasks.forEach((task,index)=>{
      content.push(
        <tr key={'task-'+index}><td>{task.name}</td><td>{String(task.createdOn)}</td></tr>
      )
    });
    return(
      <div className="task-cont">
          {(()=>{
            if(this.props.tasks.size>0){
              return(
                <table style={{width:'100%'}}>
                  <thead>
                    <tr><td>Task Name</td><td>Created On</td></tr>
                  </thead>
                  <tbody>
                    {content}
                  </tbody>
                </table>
              );
            }else{
              return(<div>No Tasks added till now.</div>)
            }
          })()}
          <TaskAdder addTaskName={this.addTaskName}/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
   tasks:state.taskReducer.get('tasks'),
   isLoading:state.taskReducer.get('isLoading')
})
export default connect(mapStateToProps)(TaskContainer);
