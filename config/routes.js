/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  '/landing': {
    controller: 'ExamsController',
    action: 'login',
  },
  '/exams/takeExam/:id': {
    controller: 'ExamsController',
    action: 'takeExam',
  },
  '/admin/viewExam/:id': {
    controller: 'ExamsController',
    action: 'viewExam',
  },
  '/users/updateExams/:ids': {
    controller: 'UsersController',
    action: 'updateExams',
  },
  '/admin/show-exams':{
    controller: 'ExamsController',
    action: 'findExams'
  },



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  //Api routes
  //Users
  'POST /api/users/add': {
    controller: 'UsersController',
    action: 'apiCreate',
  },
  'PUT /api/user/:id': {
    controller: 'UsersController',
    action: 'updateExams',
  },
  'GET /api/user/:id': {
    controller: 'UsersController',
    action: 'apiFind',
  },
  'POST /api/user/scoreUpdate': {
    controller: 'UsersController',
    action: 'scoreUpdate',
  },


  //Exams
  'POST /api/exams/add': {
    controller: 'ExamsController',
    action: 'apiCreate',
  },
  'GET /api/exams/list': {
    controller: 'ExamsController',
    action: 'apiList',
  },
  'GET /api/exams/:id': {
    controller: 'ExamsController',
    action: 'apiRead',
  },
  'PUT /api//exmas/:id': {
    controller: 'ExamsController',
    action: 'apiFind',
  },

  //Questions
  'POST /api/questions/add': {
    controller: 'QuestionsController',
    action: 'apiAdd',
  },
};
