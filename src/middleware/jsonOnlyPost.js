const errors = require('restify-errors');

module.exports = (req, res, next) => {
    if(req.method !== 'POST') {
        return next();
    } else {
        if(!req.is('application/json')) {
            res.send(new errors.InvalidHeaderError('Expected \'application/json\''));
            return next(false);
        } else {
            return next();
        }
    }
}