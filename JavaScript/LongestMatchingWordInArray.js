function longestMatchingSubstring(arr) {
    if (arr.length === 0) return '';

    let longest = '';
    
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = i + 1; j <= arr[0].length; j++) {
            let substring = arr[0].substring(i, j);
            let isCommon = arr.every(word => word.includes(substring));
            if (isCommon && substring.length > longest.length) {
                longest = substring;
            }
        }
    }

    return longest;
}

let arr = ["Amazon", "AmazonHousing.com","AmazonMicrosoft","azonMorgan Stanley"];
console.log(longestMatchingSubstring(arr)); 