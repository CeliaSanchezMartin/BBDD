let mysql = require("mysql2");

let connection = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "Celiamola1.",
        database : "museo"
    }
);

connection.connect(function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Conexion correcta.");
    }
});

//- Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización dentro
//de la exposición, la fecha de expiración de este, la información básica (nombre, apellidos y
//email) de la persona que los ha prestado.
/*
let params =['prestamo'];
let sql = "SELECT piezas.nombre, ubicacion.nombre, prestamos.fecha_expedicion, dueños.nombre, dueños.apellidos, dueños.email, prestamos.tipoPrestamo FROM piezas JOIN prestamos ON (piezas.id_prestamo = prestamos.id_prestamo) JOIN dueños ON (prestamos.id_dueño = dueños.id_dueño) JOIN ubicacion ON (piezas.id_ubicacion = ubicacion.id_ubicacion) WHERE prestamos.tipoPrestamo = ?";
connection.query(sql,params, function (err, result){
            if(err) {
                 console.log(err);
            } else {
                 console.log('Listado de objetos en estado de prestamo:');
                 console.log(result);

            }
});
*/

//- Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas agrupados
//por su situación dentro de la organización, esto es, cuántos hay expuestos, cuántos en
//itinerancia y cuántos almacenados.
let params =[];
let sql = "SELECT ubicacion.tipoUbicacion, COUNT(*) AS todasPiezas FROM piezas JOIN ubicacion ON (piezas.id_coleccion = ubicacion.id_ubicacion) GROUP BY tipoUbicacion ORDER BY todasPiezas DESC";
connection.query(sql, params, function (err, result){
            if(err) {
                console.log(err);
            }
            else {
                console.log('Total de piezas:');
                console.log(result);

            }
});