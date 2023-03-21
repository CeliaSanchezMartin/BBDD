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

//Con la base de datos que ya teniamos implementada.
//Calcular la nota media de los alumnos de la asignatura 1.
/*
let sql = "SELECT AVG(mark) FROM marks WHERE subject_id = 1"
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Esta es la nota media de los alumnos de la asignatura 1: ");
        console.log(res);
    }
});

//Calcular el numero total de alumnos.
let sql = "SELECT COUNT (*) FROM students"
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("El numero total de alumnos es: ");
        console.log(res);
    }
});


//Lista groups
let sql = "SELECT group_id, name FROM grupos"
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Grupos: ");
        console.log(res);
    }
});

//Eliminar todas las notas por encima de 5 y que sean del año pasado.
let sql = "DELETE FROM marks WHERE mark >= 5 AND date > '2022-03-17'"
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Se han eliminado las notas del año pasado");
        console.log(res);
    }
});

//Obtén los datos de todos los estudiantes que estén en el bootcamp este año. 
//Para ello la tabla de estudiantes debe tener un campo que sea el año de ingreso.

//Añadimos la columna lo primero.
let column = "ALTER TABLE students ADD COLUMN year INT";
connection.query(column, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Columna Año de ingreso creada");
        console.log(res);
    }
});


//Ahora seleccion.
let sql = "SELECT * FROM students WHERE year >= 2022"
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Estos son los estudiantes que estan en el bootcamp este año ");
        console.log(res);
    }
});


//Calcula el número de profesores que hay por asignatura.
let sql = "SELECT subject_id, COUNT(*) AS subject_teacher FROM subject_teacher GROUP BY subject_id"
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Prfesores por asignatura: ");
        console.log(res);
    }
});


//Reto 2.
//Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota
//mayor de 8 y la nota tenga fecha del año pasado.
let sql = "SELECT subject_id, mark FROM marks WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8 AND date > '2022-01-01')"
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Notas de alumnos:");
        console.log(res);
    }
});


//Obtén la media de las notas que se han dado en el último año por asignatura.
let sql = "SELECT AVG(mark), subject_id FROM marks WHERE date > '2022-01-01' GROUP BY subject_id"
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Notas del último año: ");
        console.log(res);
    }
});

*/

//Obtén la media aritmética de las notas que se han dado en el último año por alumno.
let sql = "SELECT AVG(mark), student_id FROM marks WHERE date > '2022-01-01' GROUP BY student_id"
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Media aritmética: ");
        console.log(res);
    }
});

