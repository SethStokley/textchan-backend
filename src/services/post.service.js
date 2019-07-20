const knex = require('../db/knex');
const errorCatch = require('../utils/errorCatch');
const createResult = require('../utils/serviceUtils').createResult;
const postProperties = ['id', 'username', 'tripcode', 'content', 'is_banned_for', 'thread_id', 'created_at'];

async function getPosts() {
    return await errorCatch(async () => {
        let posts = await knex('posts')
        .select(postProperties);

        return posts;
    });
}

async function getPostsByThreadId(thread_id) {
    return await errorCatch(async () => {
        let posts = await knex('posts')
        .select(postProperties)
        .where({thread_id: thread_id});

        return posts;
    });
}

async function createPost(username, tripcode, content, threadId) {
    console.log(threadId);
    return await errorCatch(async () => {
        let post = await knex('posts')
        .insert({
            username: username,
            tripcode: tripcode,
            content: content,
            thread_id: threadId
        });

        return createResult(post);
    })
}

module.exports = {
    getPosts,
    getPostsByThreadId,
    createPost
}