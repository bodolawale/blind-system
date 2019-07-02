/**
 * Exams.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string'
    },
    code: {
      type: 'string'
    },
    users: {
      collection: 'users',
      via: 'exams'
    },
    questions: {
      collection: 'questions',
      via: 'exams'
    },
  },

};

