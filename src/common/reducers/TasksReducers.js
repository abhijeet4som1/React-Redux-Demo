import {initialState,ADD_TASK,SET_LOADING} from '../actions/TaskAction';

export default function taskReducer(state=initialState,action:any){
   switch(action.type){
      case ADD_TASK:{
	      	let currTasks= state.get('tasks');
	      	currTasks=currTasks.push(action.task);
	      	return state.set('tasks',currTasks);
      }
      case SET_LOADING:{
      	return state.set('isLoading',action.isLoading);
      }
      default:
        return state;
   }
}
