//for(var i=1; i<=4; i++){
   // console.log("*".repeat(i));}


var limit=5
for(let i=1;i<=limit;i++){ 
    out="";                      //null, *, ** ,***, ...
    for(let j=1;j<=i;j++){  
        out=out+"*";         }        // * ** *** **** ***** 
    console.log(out);}