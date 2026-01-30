// complete the given function

function palindrome(str){
 const s=str.toLowerCase();
	let arr=s.split("");
	let n=arr.length;
	for(let i=0;i<n;i++){
		if(arr[i]!==arr[n-i-1]) return false;
	}
	return true;
	
}
module.exports = palindrome
