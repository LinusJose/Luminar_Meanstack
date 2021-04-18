var student={
    roll:100,
    name:"vinu",
    course:"bca",
    total:150
}
console.log(student);
student["total"]+=50;
console.log(student["total"]);
console.log("grade" in student);
student["grade"]="B";
console.log(student);