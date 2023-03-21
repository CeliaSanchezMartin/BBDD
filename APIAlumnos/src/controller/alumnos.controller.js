const connection = require("../database");

let alumno = null;

function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta)
}

function getAlumno(request, response) {
    let sql;
    if(request.query.id == null) {
        console.log(request.query.id);
        sql = "SELECT * FROM students"
    } else {
        sql = "SELECT * FROM students WHERE student_id = " + request.query.id;
    }

    connection.query(sql, function(err, result) {
        if (err) {
            console.log(err);
            response.status(500).send("Error")
        } else {
            response.send(result)
        }
    })
};

function postAlumno(request, response){
    const {firts_name, last_name, group_id, year} = request.body;
    let sql = "INSERT INTO students (firts_name, last_name, group_id, year) VALUES (?, ?, ?, ?)";
    const params = [firts_name, last_name, group_id, year];

    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
            response.status(500).send("Error al insertar un alumno nuevo")
        } else {
            console.log(result);

            if(result.insertId) {
                response.status(200).json({ message: "Estudiante añadido con existo", id: result.insertId});
            } else {
                response.status(500).send("Error al instertar un alumno nuevo.")
            }

        }
    })
};

function putAlumno(request,response){
   
let id = request.query.id;
    let params = [
        request.body.firts_name,
        request.body.last_name,
        request.body.group_id,
        request.body.year,
        parseInt(id)
    ];

    let sql = "UPDATE students SET firts_name = (?), last_name = (?) , group_id = (?), year = (?) WHERE student_id = ?"
    

    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
            response.status(500).send("Error al modificar el alumno")
        } else {
            response.status(200).send("El alumno se ha actualizado con exito")

        }
    })

};

function deleteAlumno(request, response){
    let id = request.query.id;
    let params = [id];
    let sql = "DELETE FROM students WHERE student_id = ?";

    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
            response.status(500).send("Error al eliminar el alumno")
        } else {
            console.log(result);
            response.status(200).send("El alumno se ha eliminado con exito")

        }
    })
}

module.exports = {getStart, getAlumno, postAlumno, putAlumno, deleteAlumno}