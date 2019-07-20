const Router = require('restify-router').Router;  
const router = new Router();
const postController = require('../controllers/post.controller');
const prefix = '/posts'
/*  GET
*   /posts/
*   Get all posts
*/
router.get(`${prefix}`, postController.getPosts);
/*  GET
*   /posts/thread/:threadId
*   Get the posts of the given thread
*/
router.get(`${prefix}/thread/:threadId`, postController.getPostsByThread);
/*  POST
*   /posts/
*   Create a post
*   Params:
*   username: The (optional) username of the user. Pass null if not using a username
*   tripcode: The (optional) tripcode of the post. Pass null if not using a tripcode
*   content: The text content of the post.
*   threadId: The ID of the thread to be posted to
*   captchaSolution: The solution of a simple-captcha-service captcha
*/
router.post(`${prefix}`, postController.createPost);

module.exports = router;