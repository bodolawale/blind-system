/**
 * QuestionsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async apiAdd(req, res) {
    const data = _.pick(req.body, ['details', 'a', 'b', 'c', 'd', 'correct', 'exams']);
    const questions = await Questions.create(data).fetch();
    return res.status(200).send({
      message: 'Questions Added Successfully',
      questions: questions
    });
  }

};

