import {fromJS,List} from 'immutable';
import {TaskModel} from '../components/TaskContainer/TaskHelper';
import * as AxiosApi from '../utilities/AxiosUtil';

export const initialState=fromJS({
  tasks:List(),
  isLoading:false
});

export const SET_LOADING='SET_LOADING';
const setLoading= (state) => {
	return {type:SET_LOADING,isLoading:state};
}

export const SET_TASKS='SET_TASKS';
const setTasks= (tasks) => {
	return {type:SET_MODEL,tasks:tasks};
}

//actions available on this component
export const ADD_TASK:string='ADD_TASK';
const addTask = (model:TaskModel)=>{
	return (dispatch,getState) => {
		//dispatch(setLoading(true));
		/*AxiosApi.post("/tasks/add-task",model,(response)=>{
			console.log("Success:",response);
			dispatch(setLoading(false));
		},(response)=>{
			console.log("Error:",response);
			dispatch(setLoading(false));
		});*/
		return dispatch(AxiosApi.callBackend('taskReducer',SET_TASKS,'GET','/tasks/add-task',model,()=>{
			console.log("success called");
		}));
	}
}


export{
  addTask,
  setLoading,
  setTasks
}
