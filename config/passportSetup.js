const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')
const keys = require('./keys');
const User = require('../models/userModel')

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.serializeUser((id, done) => {
    User.findById(id).then((user) => {

        done(null, user.id);
    })
})

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new googleStrategy({
    //option for google strat
    callbackURL: 'http://localhost:2000/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile)
    //check if user already exist in our db
    User.findOne({ googleID: profile.id }).then((currentUser) => {
        if (currentUser) {
            //already have the user
            // console.log('user is:', currentUser)
            done(null, currentUser)
        } else {
            //if not creat user in our db

            new User({
                userName: profile.displayName,
                googleID: profile.id,
                thumbnail: profile.photos[0].value,
            }).save().then((newUser) => {
                console.log('new user created:' + newUser)
                done(null, newUser)
            });
        }
    })


})

)