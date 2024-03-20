const express = require('express');
const router = express.Router();
const auth = require('./authentication');
const user = require('./user');

const defaultRoutes = [
  {
    path: '/auth',
    route: auth,
  },
  {
    path: '/user',
    route: user,
  },
  //add more route of user like  rating etc as above
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});



module.exports = router;