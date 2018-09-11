const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static(__dirname+ '/dist/ng610'));
const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/ng1', { useNewUrlParser: true })
.then(() => console.log('Mongose Up'))

const User = require('./schemas/User')
app.use(bodyParser.json())

app.post('/api/register', async (req, res) => {
    console.log('register');
    const user = new User(req.body)
    const result = await user.save();
    res.json(result)
});
app.post('/api/authenticate', async (req, res) => {
    
    var username = req.body.username;
    var password = req.body.password;
    console.log(" {"+username+"}, {"+password+"} ");
    User.findOne({username: username, password: password},function(err, users) {
        console.log('ISMATCH IS: ' + users);
        console.log('Error: ' + err);
        // if(err) {
        //     console.log('THIS IS ERROR RESPONSE')
        //     res.json(err)
        // }else if(users == null){
        //     console.log('Null response');
        //     res.json('hai');
        // }else {
        //     console.log('THIS IS ISMATCH RESPONSE')
        //     res.json(users)
        // }
        res.json(users);   
        // let user = users;
        // //alert(user);
        // if(users != null){
        //     let body = {
        //         id: user.id,
        //         username: user.username,
        //         firstName: user.firstName,
        //         lastName: user.lastName
        //         //,token: 'fake-jwt-token'
        //     };    
        //     return "login sucessfull";
        // }else if(users == null){            
        //     return 'Username or password is incorrect';
        // }
       
    });


    // let filteredUsers = users.filter(user => {
    //     return user.username === request.body.username && user.password === request.body.password;
    // });

    // if (filteredUsers.length) {
    //     // if login details are valid return 200 OK with user details and fake jwt token
    //     let user = filteredUsers[0];
    //     let body = {
    //         id: user.id,
    //         username: user.username,
    //         firstName: user.firstName,
    //         lastName: user.lastName,
    //         token: 'fake-jwt-token'
    //     };

    //     return of(new HttpResponse({ status: 200, body: body }));
    // } else {
    //     // else return 400 bad request
    //     return throwError({ error: { message: 'Username or password is incorrect' } });
    // }

});
app.listen(3000, () => console.log('server listening 3000'))