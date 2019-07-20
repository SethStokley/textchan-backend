function createResult(queryResult) {
    if(queryResult.rowCount >= 1) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    createResult
}