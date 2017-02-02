
export default store => next => action => {
	console.log(action);
	const callAPI = action['CALL_API'];
	let { types, targetReducer, requestMethod, endpoint, requestData, callback} = callAPI;
	console.log('called');
}