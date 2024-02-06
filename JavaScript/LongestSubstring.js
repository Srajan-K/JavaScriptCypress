var value='Srajan Kotian'

function distinct(str,i,j){
 
    var visited=new Array(256)
    for(var k=i;k<=j;k++){
        if(visited[str.charAt(k)]==true){
            return false;
        }else{
            visited[str.charAt(k)]=true;
        }
    }
    return true
}

function longestSubstr(str)
{
    var n = str.length;
     
    var res = 0; 
     
    for(var i = 0; i < n; i++)
        for(var j = i; j < n; j++)
            if (distinct(str, i, j))
                res = Math.max(res, j - i + 1);
                 
    return res;
}

console.log(`The longest substring is of length ${longestSubstr(value)}`)

