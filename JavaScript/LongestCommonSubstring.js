function longestCommonSubstring(arr) {
    if (arr.length === 0) return '';

    let longest = '';
    
    for (let i = 0; i < arr[0].length; i++) {
            let substring = arr[0].substring(0, i);
            let isCommon = arr.every(word => word.includes(substring));
            if (isCommon && substring.length > longest.length) {
                longest = substring;
            }
        }
        return longest;    
    }



let arr1 = ["flower","flow", "flop"]
console.log(longestCommonSubstring(arr1))
