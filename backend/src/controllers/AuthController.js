const Tweet = require('../models/Tweet');
const Auth = require('../models/Auth');

module.exports = {
  async index(req, res) {
    const auths = await Auth.find({}).sort('name');

    return res.json(auths);
  }

  /* async store(req, res) {
    const tweet = await Tweet.create(req.body);

    req.io.emit('tweet', tweet); //avisar em real time que algo mudou

    return res.json(tweet);
  } */
};
