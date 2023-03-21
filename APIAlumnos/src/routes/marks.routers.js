const {Router} = require ("express");
const router = Router();
const marksCtrl = require("../controller/marks.controller");

router.get("/", marksCtrl.getStart);
router.get("/media", marksCtrl.getMedia);
router.get("/apuntadas", marksCtrl.getAsignaturas);
router.get("/impartidas", marksCtrl.getImpartidas);

module.exports = router;