//given two arrays a and b return a with all the items in b removed

function arrayDiff(a, b) {
    //parameters
    //two arrays
    //result a with all the values in b  removed
    //examples [], [4,5 ] return []
    //[3, 4], [3]
    let result;
    if( a.length === 0 || b.length ===0){ return a}
    else{
       result = a.filter((item)=> !b.includes(item))
    }
   return result;
  }