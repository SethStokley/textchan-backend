const fetch = require('node-fetch');
const config = require('../../config/textchan.json');

module.exports = async function validateCaptcha(req, solution) {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    const verifyUrl = `${config.captcha.url}/captcha/check?ip=${ip}&solution=${solution}`;
    let response = await fetch(verifyUrl);
    response = await response.json();
    console.log(response);
    
    if(!response.success) {
        return false;
    } else {
        return true;
    }
}