const errors = require('restify-errors');
const config = require('../../config/textchan.json');
const verifyCaptcha = require('../utils/captcha');

async function handleCaptcha(solution, req, res, next, method) {
    if(await verifyCaptcha(req, solution)) {
        method(req, res, next);
    } else {
        res.send(new errors.InvalidContentError(`The captcha was invalid`));
        next(false);
    }
}

function handleReturn(resource, post, res, next, optionalCb) {
    if(!resource) {
        if(post) {
            res.send({success: false});
            next();
        } else {
            res.send(204);
            next();
        }
    } else {
        if(post) {
            if(optionalCb) {
                optionalCb();
            } else {
                res.send({success: true});
                next();
            }
        } else {
            res.send(resource);
            next();
        }
    }
}

async function handleAdminRequest(adminpass, res, next, method) {
    if(adminpass !== config.app.adminPassword) {
        res.send(403);
        next();
    } else {
        method();
    }
}

module.exports = {
    handleReturn,
    handleAdminRequest,
    handleCaptcha
}