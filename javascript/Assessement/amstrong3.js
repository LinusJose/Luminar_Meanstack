var num=371;
cubesum=0;
flag=num;
while(num!=0)
{
digit=num%10;   // 1 7 3   9 3
cube=digit*digit*digit; //1*1*1= 1   7*7*7=343 3*3*3=27 261 
cubesum=cubesum+cube;    // 0+1=1  1+343=344  344+27=371 261 
num=Math.floor(num/10) ;           // 37  3   3
}
console.log(cubesum);
if(flag==cubesum)
{
    console.log("Enterd number is amstrong");
}
else{
    console.log("Enterd number is not an amstrong");
}