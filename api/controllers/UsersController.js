/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async apiCreate(req, res) {
    try {
      const data = _.pick(req.body, ['firstName', 'lastName', 'matric', 'password']);
      const user = await Users.create(data).fetch();
      return res.status(200).send({
        message: 'User Created Successfully',
        user
      });
    } catch (error) {
      return res.status(400).send({ message: 'Unable to create user', error });
    }
  },
  async apiFind(req, res) {
    try {
      const user = await Users.findOne({id: req.params.id}).populate('exams');
      if(!user) {
        return res.status(400).send({ message: 'User not found', });
      }
      return res.status(200).send({
        message: 'User found Successfully',
        user
      });
    } catch (error) {
      return res.status(400).send({ message: 'Unable to find user', error });
    }
  },
  async updateExams(req, res) {
    const bothIds = req.params.ids.split(':').pop();
    const ids = bothIds.split('-');
    const object = {};
    object[ids[1]] =ids[2];
    try {
      Users.findOne({id: ids[0]})
        .then(user => {
          user.examsScore.push(object);
          Users.update({id: ids[0]}, { examsScore: user.examsScore })
            .then(() => {
              Users.addToCollection(ids[0], 'exams').members(ids[1]).exec((err, ) => {
                if (err) {
                  res.send(500, { error: 'Database Error'});
                }
                res.view('pages/homepage');
              });
            });
        })
    } catch (error) {
      return res.status(400).send({ message: 'Unable to update user', error });
    }
  },

  async scoreUpdate(req, res) {
    try {
      const {score, examId, userId} = req.body;
      const object = {};
      object[examId] = score;
      // const user = await Users.update({id: userId}, {examsScore: {$push: object}}).fetch();
      // return res.status(200).send({
      //   message: 'User Updated Successfully',
      //   user
      // });

      Users.findOne({id: userId})
        .then(user => {
          user.examsScore.push(object);
          Users.update({id: userId}, { examsScore: user.examsScore })
            .then(user => {
              return res.status(200).send({
                message: 'User Updated Successfully',
                user
              });
            });
        });
    } catch (error) {
      return res.status(400).send({ message: 'Unable to update score', error });
    }
  }
};

