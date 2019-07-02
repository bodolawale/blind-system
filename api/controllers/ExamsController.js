/**
 * ExamsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async apiCreate(req, res) {
    const data = _.pick(req.body, ['title', 'code',]);
    const exams = await Exams.create(data).fetch();
    return res.status(200).send({
      message: 'Exams Created Successfully',
      exams: exams
    });
  },
  async apiList(req, res) {
    try {
      const exams = await Exams.find();
      return res.status(200).send({
        message: 'Exams Found Successfully',
        exams
      });
    } catch (error) {
      res.status(500).send({
        message: 'Error listing exams',
        error
      });
    }
  },
  async apiRead(req,res) {
    try {
      const exam = await Exams.findOne({id: req.params.id }).populate('questions').populate('users');
      return res.status(200).send({
        message: 'Exam Found Successfully',
        exam
      });
    } catch (error) {
      res.status(500).send({
        message: 'Error listing exams',
        error
      });
    }
  },

  async findExams(req, res){
    Exams.find({}).exec((err, exams) => {
      if (err) {
        res.send(500, { error: 'Database Error'});
      }
      res.view('admin/exams', {exams}, );
    });
  },

  async login(req, res) {
    const { matric, password } = req.body;
    const user = await Users.findOne({matric, password}).populate('exams');
    if(!user){
      res.status(500).send({ error: 'User Not Found' });
    }
    Exams.find({}).exec((err, exams) => {
      if (err) {
        res.send(500, { error: 'Database Error'});
      }
      res.view('landing', {exams, user}, );
    });
  },

  async takeExam(req, res) {
    const id = req.params.id.split(':').pop();
    Exams.findOne({ id }).populate('questions').exec((err, exam) => {
      if (err) {
        res.send(500, { error: 'Database Error'});
      }
      res.view('pages/takeExams', {exam});
    });
  },
  async viewExam(req, res) {
    // const id = req.params.id.split(':').pop();
    const id = req.params.id;
    Exams.findOne({ id }).populate('users').exec((err, exam) => {
      if (err) {
        res.send(500, { error: 'Database Error'});
      }
      res.view('pages/viewExams', {exam});
    });
  },
};

