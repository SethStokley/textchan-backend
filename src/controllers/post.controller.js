const errors = require('restify-errors');
const handleReturn = require('../utils/controllerUtils').handleReturn;
const handleCaptcha = require('../utils/controllerUtils').handleCaptcha;
const postService = require('../services/post.service');


async function getPosts(req, res, next) {
    let posts = await postService.getPosts();
    handleReturn(posts, false, res, next);
}

async function getPostsByThread(req, res, next) {
    let threadId = req.params.threadId;
    let posts = await postService.getPostsByThreadId(threadId);
    handleReturn(posts, false, res, next);

}

async function createPost(req, res, next) {
    let {username, tripcode, content, threadId, captchaSolution} = req.body;
    // captcha
    handleCaptcha(captchaSolution, req, res, next, async (req, res, next) => {
        let post = await postService.createPost(username, tripcode, content, threadId);
        handleReturn(post, true, res, next, () => {
            res.send({success: true});
        });
    });
}

module.exports = {
    getPosts,
    getPostsByThread,
    createPost
}