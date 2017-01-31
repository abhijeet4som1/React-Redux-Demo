
import {combineReducers} from 'redux';
import TasksReducers from './TasksReducers';

const appReducers = combineReducers({
  taskReducer: TasksReducers
});

const rootReducer=(state,action)=>{
  return appReducers(state,action);
}
export {rootReducer};
