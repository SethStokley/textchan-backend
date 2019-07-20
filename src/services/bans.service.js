const knex = require('../db/knex');
const errorCatch = require('../utils/errorCatch');

async function createBan(ip_address, ban_length) {
    errorCatch(async () => {
        let ban = await knex('bans')
        .insert({
            ip_address: ip_address,
            ban_length: ban_length
        });

        return createResult(ban);
    });
}

async function deleteBan(ip_address) {
    errorCatch(async () => {
        let ban = await knex('bans')
        .where({ip_address: ip_address})
        .del();
    });
}

module.exports = {
    createBan,
    deleteBan
}