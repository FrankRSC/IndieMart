const { Router } = require('express');
const router = Router();

const { CorreoControlador } = require('../controllers/index');

const { sendMail } = new CorreoControlador();

router
    .route('/')
    .post(sendMail);

module.exports = router;