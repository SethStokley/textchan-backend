const Router = require('restify-router').Router;  
const router = new Router();
const boardController = require('../controllers/board.controller.js');
const prefix = '/boards'
/*  GET
*   /boards/
*   Gets all boards
*/
router.get(`${prefix}`, boardController.getBoards);
/*  GET
*   /boards/:code
*   Gets the board of the given code
*/
router.get(`${prefix}/:code`, boardController.getBoard);
/*  GET
*   /boards/id/:boardId
*   Gets the board of the given id
*/
router.get(`${prefix}/id/:boardId`, boardController.getBoardById);
/*  POST
*   /boards/
*   Creates a board
*   Params:
*   name: The name of the board (e.g. "Anime/Manga")
*   code: The code of the board (e.g. "a")
*   tagline: The tagline of the board (e.g. "The best place to watch anime!")
*   adminpass: The admin password
*/
router.post(`${prefix}`, boardController.createBoard);

module.exports = router;