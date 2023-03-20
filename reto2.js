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
//Eliminar de la base de datos todas las fechas con más de diez años.
let sql= "DELETE FROM marks WHERE date < '2012-12-31' "
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Notas  borradas");
        console.log(res);
    }
});
*/

//Setear las notas que sean menores a 5 por un 5.
let sql= "UPDATE marks SET mark = 5 WHERE mark < 5"
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Notas actualizadas");
        console.log(res);
    }
});
