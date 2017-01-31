import {initialState,ADD_TASK} from '../actions/TaskAction';

export default function taskReducer(state=initialState,action:any){
  console.log("reducers",state,action);
   switch(action.type){
      case ADD_TASK:
        let currTasks= state.get('tasks');
        currTasks.push(action.task);
        return state.set('tasks',currTasks);
      default:
        return state;
   }
}
