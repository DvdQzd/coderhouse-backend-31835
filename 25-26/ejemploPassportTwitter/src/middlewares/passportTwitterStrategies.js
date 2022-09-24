import { Strategy as TwitterStrategy } from 'passport-twitter'

const TWITTER_CONSUMER_KEY = 'vXPJNeon7xF5SUXEKDyZ0yf18';
const TWITTER_CONSUMER_SECRET = 'ZCEaJqPrev7i4eai00mztMGi0KvQfNouLTMmt2aeNX5LrV9tXt';

export const loginTwitter = new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: '/auth/twitter/callback',
}, (token, tokenSecret, userProfile, done) => {
    const userData = {
        id: userProfile.id,
        username: userProfile.username,
        displayName: userProfile.displayName,
        photos: userProfile.photos,
    }
    return done(null, userData);
})

