const {Router} = require ("express");
const router = Router();
const alumnCtrl = require("../controller/alumnos.controller");

router.get("/", alumnCtrl.getStart);
router.get("/alumnos", alumnCtrl.getAlumno);
router.post("/alumnos", alumnCtrl.postAlumno);
router.put("/alumnos", alumnCtrl.putAlumno);
router.delete("/alumnos", alumnCtrl.deleteAlumno);


module.exports = router;