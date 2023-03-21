let mysql = require("mysql2");

let connection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "Celiamola1.",
        database : "bbdd"
    }
);

connection.connect(function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Conexion correcta.");
    }
});
/*
//Reto 1.
//Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que
//están apuntados.
let sql = "SELECT firts_name, last_name, title FROM students JOIN marks ON(students.student_id = marks.student_id) JOIN subject ON(marks.subject_id = subject.subject_id)";
connection.query(sql, function (err, res){
    if(err){
        console.log(err);
    } else {
        console.log(("Nombres y apellidos de los alumnos y las asignaturas: "));
        console.log(res);
    }
});


//Reto 2.
//Obtén todos los nombres y apellidos de los profesores y 
//los nombres de las asignaturas  que imparten.
let sql = "SELECT first_name, last_name, title FROM teachers JOIN subject ON(teachers.teacher_id = subject.subject_id)";
connection.query(sql, function (err, res){
    if(err){
        console.log(err);
    } else {
        console.log(("Profesores y asignaturas que imparten:"));
        console.log(res);
    }
});
*/

//Reto 3.
//Obtén el número total de alumnos por asignatura, 
//el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.
let sql = " SELECT subject.title, teachers.first_name, teachers.last_name, COUNT(students.student_id) AS all_students FROM students JOIN subject_teacher ON (students.group_id = subject_teacher.group_id) JOIN subject ON (subject_teacher.subject_id = subject.subject_id) JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) GROUP BY subject.title"
connection.query(sql, function (err, res){
    if(err){
        console.log(err);
    } else {
        console.log(("Nombre de la asignatura, numero de alumnos que tiene y nombre del profesor que la imparte:"));
        console.log(res);
    }
});

//SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
