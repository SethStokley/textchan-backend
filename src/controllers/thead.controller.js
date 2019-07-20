const handleReturn = require('../utils/controllerUtils').handleReturn;
const handleCaptcha = require('../utils/controllerUtils').handleCaptcha;
const threadService = require('../services/thread.service');
const postService = require('../services/post.service');

async function createThread(req, res, next) {
    let {subject, boardCode, username, tripcode, content, captchaSolution} = req.body;
    handleCaptcha(captchaSolution, req, res, next, async (req, res, next) => {
        let thread = await threadService.createThread(subject, boardCode);
        let post = await postService.createPost(username, tripcode, content, thread[0].id);
        res.send({success: true, thread_id: thread[0].id});
        next();
    });
}

async function getThreads(req, res, next) {
    let threads = await threadService.getThreads();
    handleReturn(threads, false, res, next);
}

async function getThread(req, res, next) {
    let threadId = req.params.threadId;
    let thread = await threadService.getThreadById(threadId);
    handleReturn(thread, false, res, next);
}

async function getThreadsByBoard(req, res, next) {
    let boardCode = req.params.boardCode;
    let threads = await threadService.getThreadsByBoardCode(boardCode);
    handleReturn(threads, false, res, next);
}

module.exports = {
    createThread,
    getThreads,
    getThreadsByBoard,
    getThread
}