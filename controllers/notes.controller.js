const Note = require("../models/Note.model");

module.exports.noteController = {
  postNote: async (req, res) => {
    try {
      const note = await Note.create({
        student: req.body.student,
        text: req.body.note
      });
      res.json(note);
    } catch (err) {
      res.json("Issues when creating note");
    }
  },

  getNotesByStudent: async (req, res) => {
    try {
      const noteStudents = await Note.find({
        student: req.params.id
      }, {
        new: true
      }).populate('student')
      res.json(noteStudents)
    } catch (err) {
      res.json('Issue when getting notes by student')
    }
  },

  getAllNotes: async (req, res) => {
    try {
      const allNotes = await Note.find({}).populate("student");
      res.json(allNotes);
    } catch (err) {
      res.json("Issue when getting all notes");
    }
  },

  getNoteById: async (req, res) => {
    try {
      const oneNote = await Note.findById(req.params.id).populate("student")
      res.json(oneNote);
    } catch (err) {
      res.json("Issue when getting note by id");
    }
  },

  patchNote: async (req, res) => {
    try {
      const note = await Note.findByIdAndUpdate(req.params.id, {
        text: req.body.note,
      }, {
        new: true
      })
      res.json(note);
    } catch (err) {
      res.json("Issues when changing pill");
    }
  },

  deleteNoteById: async (req, res) => {
    try {
      await Note.findByIdAndRemove(req.params.id);
      res.json("Note has been removed");
    } catch (err) {
      res.json("Issues when removing note");
    }
  },
};