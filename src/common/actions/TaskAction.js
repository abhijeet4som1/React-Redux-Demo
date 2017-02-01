import {fromJS,List} from 'immutable';
import {TaskModel} from '../components/TaskContainer/TaskHelper';


export const initialState=fromJS({
  tasks:List(),
  isLoading:false
});

//actions available on this component
export const ADD_TASK:string='ADD_TASK';
const addTask = (model:TaskModel)=>{
    return {type:ADD_TASK,task:model};
}


export{
  addTask
}
