const connection = require("../database");

let marks = null;

function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta)
};

function getMedia(request, response){
    let id = request.query.id;
    let params = [id];
    let sql = "SELECT AVG(mark) AS media_alumno FROM marks WHERE student_id = ? ";

    connection.query(sql, params, function(error, result){
        if(error){
            console.log(error);
        } else {
            response.send(result)
        }
    })

};

function getAsignaturas(request, response){
    let id = request.query.id;
    
    let sql;
    if(request.query.id == null){
        console.log(id);
        sql = "SELECT students.firts_name, students.last_name, subject.title FROM students INNER JOIN marks ON students.student_id = marks.student_id  INNER JOIN subject ON marks.subject_id = subject.subject_id";
    } else {
        let params = [parseInt(id)];
        sql = "SELECT subject.title FROM marks INNER JOIN subject ON marks.subject_id = subject.subject_id WHERE marks.student_id = " + request.query.id;
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

function getImpartidas(request, response){
    let sql;
    if(request.query.id == null){
        sql = "SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) JOIN subject ON (subject_teacher.subject_id = subject.subject_id)";

    } else {
        sql = "SELECT subject.title FROM subject, subject_teacher, teachers WHERE teachers.teacher_id = subject_teacher.teacher_id AND subject_teacher.subject_id = subject.subject_id and teachers.teacher_id =" + request.query.id;
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



module.exports = {getStart, getMedia, getAsignaturas, getImpartidas}