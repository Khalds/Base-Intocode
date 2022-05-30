const {
  Router
} = require('express')
const {
  noteController
} = require('../controllers/notes.controller')

const router = Router()

router.post('/note', noteController.postNote)
router.get('/student/note/:id', noteController.getNotesByStudent)
router.get('/note', noteController.getAllNotes)
router.get('/note/:id', noteController.getNoteById)
router.patch('/note/:id', noteController.patchNote)
router.delete('/note/:id', noteController.deleteNoteById)


module.exports = router