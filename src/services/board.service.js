const knex = require('../db/knex');
const createResult = require('../utils/serviceUtils').createResult;
const errorCatch = require('../utils/errorCatch');
const boardProperties = ['id', 'name', 'code', 'tagline']

async function createBoard(name, code, tagline) {
    return await errorCatch(async () => {
        let board = await knex('boards').insert({
            name: name,
            code: code,
            tagline: tagline
        });
        
        return createResult(board);
    });
}

async function getBoards() {
    return await errorCatch(async () => {
        let boards = await knex('boards')
        .select(boardProperties);

        return boards;
    });
}

async function getBoardByCode(code) {
    return await errorCatch(async () => {
        let board = await knex('boards')
        .select(boardProperties)
        .where({code: code});

        return board[0];
    });
}

async function getBoardById(id) {
    return await errorCatch(async () => {
        let board = await knex('boards')
        .select(boardProperties)
        .where({id: id});

        return board[0];
    });
}

module.exports = {
    createBoard,
    getBoards,
    getBoardByCode,
    getBoardById
}