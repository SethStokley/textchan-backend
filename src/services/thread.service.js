const knex = require('../db/knex');
const boardService = require('./board.service');
const createResult = require('../utils/serviceUtils').createResult;
const errorCatch = require('../utils/errorCatch');

async function createThread(subject, boardCode) {
    return await errorCatch(async () => {
        let board = await boardService.getBoardByCode(boardCode);
        let thread = await knex('threads').insert({
            title: subject,
            board_id: board.id
        });
        // I am so fucking tired and this code keeps devolving so fuck it, get the new thread
        let thread_id = await knex('threads').select('id').where({title: subject});
        return thread_id;
    });
}

async function getThreads() {
    return await errorCatch(async () => {
        let threads = await knex('threads')
        .select('id', 'title', 'is_pinned', 'score', 'board_id', 'created_at');

        return threads;
    });
}

async function getThreadById(threadId) {
    return await errorCatch(async () => {
        let thread = await knex('threads')
        .select('id', 'title', 'is_pinned', 'score', 'board_id', 'created_at')
        .where({id: threadId});
        return thread[0];
    });
}

async function getThreadsByBoardCode(boardCode) {
    return await errorCatch(async () => {
        let board = await boardService.getBoardByCode(boardCode);
        let threads = await knex('threads')
            .select('id', 'title', 'is_pinned', 'score', 'board_id', 'created_at')
            .where({board_id: board.id});
        return threads;
    });
}

async function deleteThreadById(threadId) {
    return await errorCatch(async () => {
        await knex('threads')
        .where({id: threadId})
        .del();
    });
}

module.exports = {
    createThread,
    getThreads,
    getThreadsByBoardCode,
    getThreadById,
    deleteThreadById
}