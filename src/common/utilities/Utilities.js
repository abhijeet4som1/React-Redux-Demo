const moment = require('moment');

export const getDateValue = (dateValue) => {
	let finalDate;
	if (dateValue) {
		if (dateValue instanceof Date) {
			finalDate = dateValue;
		} else {
			if (/^\d+$/.test(dateValue)) {
				finalDate = new Date(dateValue);
			} else {
				finalDate = dateValue;
			}
		}
	}
	return finalDate;
}

export const formatDate = (inputDate,format) => {
	let result = '';
	if(inputDate && format){
		inputDate = getDateValue(inputDate);
		if(inputDate){
			result = moment(inputDate).format(format);
		}
	}
	return result;
}