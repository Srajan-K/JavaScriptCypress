let arr1 = ["zebra","anternna", "tomato","apple","shoe"]
for(var i=0;i<arr1.length;i++){
    for(var j=i;j<arr1.length;j++){
    if(arr1[i]>arr1[j]){
        var temp=arr1[i]
        arr1[i]=arr1[j]
        arr1[j]=temp
    }
}
}
console.log(arr1)