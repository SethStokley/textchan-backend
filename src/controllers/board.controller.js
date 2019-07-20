const boardService = require('../services/board.service');
const handleReturn = require('../utils/controllerUtils').handleReturn;
const handleAdminRequest = require('../utils/controllerUtils').handleAdminRequest;
const pino = require('../utils/pino');

async function createBoard(req, res, next) {
    let {name, code, tagline, adminpass} = req.body;
    handleAdminRequest(adminpass, res, next, async () => {
        let board = await boardService.createBoard(name, code, tagline);
        handleReturn(board, true, res, next);
    });
}

async function getBoards(req, res, next) {
    let boards = await boardService.getBoards();
    handleReturn(boards, false, res, next);
}

async function getBoard(req, res, next) {
    let code = req.params.code;
    let board = await boardService.getBoardByCode(code);
    handleReturn(board, false, res, next);
}

async function getBoardById(req, res, next) {
    let id = req.params.boardId;
    let board = await boardService.getBoardById(id);
    handleReturn(board, false, res, next);
}

module.exports = {
    createBoard,
    getBoards,
    getBoard,
    getBoardById
}