const express = require('express');
const router = express.Router();
const Student = require('../methods/student');

router.get('/students', async (req, res) => {
    try {
        const allStudents = await Student.findAll();
        res.json(allStudents);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;