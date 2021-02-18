module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/user', user.create);

    // Retrieve all User
    app.get('/user', user.findAll);

    // Retrieve a single User with name
    app.get('/user/:fname', user.findOne);
   // app.get('/user/:_id', user.findOne);

    // // Update a User with _Id
     app.put('/user/:_id', user.update);

    // // Delete a User with _Id
    app.delete('/user/:id', user.delete);
    // app.delete('/user/:fname', user.delete);
}