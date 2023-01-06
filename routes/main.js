const router = require('express').Router();

const processesController = require('../controllers/processes');

router.get('/', processesController.getAllBooks);

router.get('/:id', processesController.getABook);

router.post('/add', processesController.addBook);

router.put('/edit/:id', processesController.editBook);

router.delete('/delete/:id', processesController.deleteBook);

module.exports = router;