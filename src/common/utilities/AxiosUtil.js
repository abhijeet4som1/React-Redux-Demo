import * as axios from 'axios';
export const axiosInst=axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  timeout: 60000
});

export const get = (url,data,onSuccess,onFailure) => {
	axiosInst.get(url, data)
		.then(function(response) {
			if (onSuccess !== undefined) {
				onSuccess(response);
			}
		}).catch(function(response) {
			if (onFailure !== undefined) {
			onFailure(response);
			}
		});
}

export const post = (url,data,onSuccess,onFailure) => {
	axiosInst.post(url, data)
		.then(function(response) {
			if (onSuccess !== undefined) {
				onSuccess(response);
			}
		}).catch(function(response) {
			if (onFailure !== undefined) {
			onFailure(response);
			}
		});
}

export const callBackend = (reducerName,action,method,endPoint,data,callBack) =>{
	const requestTypes =['CALL_API',action,'FAILURE'];
	return {
      ['CALL_API']: {
        types: requestTypes,
        targetReducer: reducerName,
        requestMethod: method,
        endpoint: endPoint,
        requestData: data,
        callback: callBack
      }
    }
}