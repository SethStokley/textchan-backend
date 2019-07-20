const pino = require('./pino');

module.exports = async function(method) {
    try {
        let returnVal = await method();
        return returnVal;
    } catch(err) {
        pino.error(err);
    }
}