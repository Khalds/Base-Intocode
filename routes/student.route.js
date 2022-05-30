const {
  Router
} = require('express')
const {
  studentController
} = require('../controllers/students.controller')

const router = Router()

router.post('/student', studentController.postStudent)
router.get('/group/:id/student', studentController.getStudentsByGroup)
router.get('/student', studentController.getAllStudent)
router.get('/student/:id', studentController.getStudentById)
router.patch('/student/:id', studentController.patchStudent)
router.delete('/student/:id', studentController.deleteStudentById)

router.get('/student/payment/full', studentController.getStudentsFullPayment)
router.get('/student/payment/half', studentController.getStudentsHalfPayment)
router.get('/student/payment/un', studentController.getStudentsUnPayment)

module.exports = router