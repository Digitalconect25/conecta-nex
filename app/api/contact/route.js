import express from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// POST contact form submissions
router.post('/', [
    body('name').isString().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('message').isString().notEmpty().withMessage('Message is required')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Log submission details
    const { name, email, message } = req.body;
    console.log(`Contact Form Submission: Name: ${name}, Email: ${email}, Message: ${message}`);

    // Here you would typically save the data to a database and send a response
    res.status(200).json({ message: 'Contact form submitted successfully!' });
});

export default router;