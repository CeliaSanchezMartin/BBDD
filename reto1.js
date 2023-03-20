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

//Añadir una columna a la tabla direccion.
/*let column = "ALTER TABLE direccion ADD COLUMN CP INT";
connection.query(column, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Columna Codigo Postal creada");
        console.log(res);
    }
})

//Eliminar una columna
let column2 = "ALTER TABLE direccion DROP COLUMN Ciudad";
connection.query(column2, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Columna Ciudad Eliminada ");
        console.log(res);
    }
})

//Eliminar la tabla dirección
let sql = "DROP TABLE direccion";
connection.query(sql,  function (err, res) {
    if(err) throw err;
    console.log("Tabla Direccion eliminada.")
})

//Setear todas las notas a 0.
let sql= "UPDATE marks SET mark=0"
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Notas acctualizadas");
        console.log(res);
    }
});


//Obtener el nombre y el primer apellido de todos los estudiantes.
let sql= "SELECT firts_name, last_name FROM students"
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Seleccion estudiantes");
        console.log(res);
    }
});
*/
//Obtener datos profesores.
let sql= "SELECT first_name, last_name FROM teachers"
connection.query(sql, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log("Seleccion profesorado");
        console.log(res);
    }
});

