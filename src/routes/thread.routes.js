const Router = require('restify-router').Router;  
const router = new Router();
const threadController = require('../controllers/thead.controller');
const prefix = '/threads'

/*  POST
*   /threads
*   Create a thread
*   Params:
*   subject: The subject of the thread
*   boardCode: The board code the thread should be linked to
*   username: The (optional) username of the user. Pass null if not using a username
*   tripcode: The (optional) tripcode of the post. Pass null if not using a tripcode
*   content: The text content of the post.
*   captchaSolution: The solution of a simple-captcha-service captcha 
*/
router.post(`${prefix}`, threadController.createThread);
/*  GET
*   /threads
*   Get all threads
*/
router.get(`${prefix}`, threadController.getThreads);
/*  GET
*   /threads/board/:boardCode
*   Get all threads on the given board
*/
router.get(`${prefix}/board/:boardCode`, threadController.getThreadsByBoard);
/*  GET
*   /threads/:threadId
*   Gets a thread by it's ID
*/
router.get(`${prefix}/:threadId`, threadController.getThread);

module.exports = router;