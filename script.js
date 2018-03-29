function searchKey(obj){
	this.data = obj.data;
	this.key  = obj.key;
	let resultData = {}
	for(let i in this.data){
		if(this.data[i] == this.key || Object.values(this.data[i]).includes(this.key) ){
			resultData[i] = this.data[i];
		}		
	}
	if(Object.keys(resultData).length){
		let result = {};
		result.status = true;
		result.numOfOccurance = Object.keys(resultData).length;
		result.atPosition = (result.numOfOccurance == 1) ? Object.keys(resultData)[0]:Object.keys(resultData);		
		result.data = resultData;		
		return result;
	} else {
		return false;
	}
}	




