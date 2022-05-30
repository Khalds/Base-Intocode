const Student = require("../models/Student.model");

module.exports.studentController = {

  postStudent: async (req, res) => {
    try {
      await Student.create({
        name: req.body.name,
        group: req.body.group,
        payment: req.body.payment,
        status: req.body.status,
      });
      res.json("Student has been added");
    } catch (err) {
      res.json("Issues when creating student");
    }
  },

  getStudentsByGroup: async (req, res) => {
    try {
      const groupStudents = await Student.find({
        group: req.params.id
      }).populate('groupe')
      res.json(groupStudents)
    } catch (err) {
      res.json('Issue when getting students by group')
    }
  },

  getStudentsFullPayment: async (req, res) => {
    try {
      const fullPayment = await Student.find({
        payment: 100
      }).populate('groupe')
      res.json(fullPayment)
    } catch (err) {
      res.json('Issue when getting students by group')
    }
  },

  getStudentsHalfPayment: async (req, res) => {
    try {
      const halfPayment = await Student.find({
        payment: 50
      }).populate('groupe offer')
      res.json(halfPayment)
    } catch (err) {
      res.json('Issue when getting students by group')
    }
  },

  getStudentsUnPayment: async (req, res) => {
    try {
      const unPayment = await Student.find({
        payment: 0
      }).populate('groupe offer')
      res.json(unPayment)
    } catch (err) {
      res.json('Issue when getting students by group')
    }
  },

  getAllStudent: async (req, res) => {
    try {
      const allStudents = await Student.find({}).populate("group offer");
      res.json(allStudents);
    } catch (err) {
      res.json("Issue when getting all students");
    }
  },

  getStudentById: async (req, res) => {
    try {
      const oneStudent = await Student.findById(req.params.id).populate(
        "group offer"
      );
      res.json(oneStudent);
    } catch (err) {
      res.json("Issue when getting student by id");
    }
  },

  patchStudent: async (req, res) => {
    try {
      const patchStudent = await Student.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        group: req.body.group,
        payment: req.body.payment,
        status: req.body.status,
      }, {
        new: true
      })
      res.json(patchStudent);
    } catch (err) {
      res.json("Issues when changing student");
    }
  },

  deleteStudentById: async (req, res) => {
    try {
      await Student.findByIdAndRemove(req.params.id);
      res.json("Student has been removed");
    } catch (err) {
      res.json("Issues when removing student");
    }
  },
};