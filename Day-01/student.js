let student = {
    name : "Surya",
    age : 19,
    dept : "AI&DS",
    year : "2nd year",
    cgpa : "9.06",
    join_year : 2025,
    current_year : 2026
};
function introduce(){
    console.log("Hi i'm "+student.name+" i study "+student.dept+" "+student.year+" and my cgpa is "+student.cgpa);
}
function calculateYear(){
    console.log("Year of study is "+ (student.current_year - student.join_year + 1));
}
introduce();
calculateYear();