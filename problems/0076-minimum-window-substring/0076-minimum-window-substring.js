/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    //prestore values of t in a map to count frequency
    const tMap = new Map();
    for(let val of t){
        tMap.set(val, (tMap.get(val) || 0) + 1);
    }

    //prereq variables
    let count = 0; //count if we got all chars from t
    //so once count equals to t.lenght we know that.

    let minLength = Infinity; //min length of string containing all t characters.

    let startIndex = -1; //store index from s where the substring starts.
    //so from startIndex and minLength we can take our output.

    //loop string s with two pointers l and r pointing to 0 in the beginning.
    let l = 0;
    let r = 0;

    while(r < s.length){
     if(tMap.has(s[r])){
            if(tMap.get(s[r]) > 0){
                count++ ;
            }
            tMap.set(s[r], tMap.get(s[r]) - 1); 
        }

    while(count == t.length){
        if(((r - l) + 1) < minLength ){
            minLength = (r - l) + 1;
            startIndex = l;
        }
        tMap.set(s[l], tMap.get(s[l]) + 1);
            if(tMap.get(s[l]) > 0){
                count-- ;
            }
            l++;
    }    
    r++;   
          

    }



    //return the output
    if(startIndex >= 0){
       return s.slice(startIndex, startIndex + minLength); 
    }else{
        return '';
    }

    

};