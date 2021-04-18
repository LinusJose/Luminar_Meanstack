var marks_of = [100,246,318,176,483];
var tot = 500;
avg = (marks_of[4] / tot) * 100;
console.log(avg);
for (let students of marks_of) {
   	 if (avg >= 90) {
        	console.log("Grade:A Plus");
        	break;  	             }
      	else if (avg >= 80) {
        	console.log("Grade:A");
        	break;		        }
   	 else if (avg >= 70) {
        	console.log("Grade:B");
        	break;                      }
   	else if (avg >= 60) 
       {
        	console.log("Grade:C");
       	break;		      
     }
    	else if (avg >= 50) {
            console.log("Grade:D");
        	break; 		       }
    
else {
        	console.log("Failed");
        	break;}
}
