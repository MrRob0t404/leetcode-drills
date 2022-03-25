/* Two number sum problem - easy  
*  time: O(n);
*  space: O(n);
*/
function twoNumberSum(array, targetSum) {
	let supplement = {}, result = []; 
	for(let i = 0; i < array.length; i++){ 
		if(supplement[targetSum - array[i]] || supplement[targetSum - array[i]] === 0 || supplement[targetSum - array[i]] === -1){ 
			result.push(targetSum - array[i]); 
			result.push(array[i])
			return result; 
		}else{ 
			supplement[array[i]] = targetSum - array[i]  
		}
	}
	return [];
}
