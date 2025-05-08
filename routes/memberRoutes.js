const express = require('express');
const router = express.Router();
const {
  getAllMembers,
  addMember,
  deleteMember,
} = require('../controllers/memberController');

// Route to get all members
router.get('/members', getAllMembers);

// Route to add a new member
router.post('/members', addMember);

// Route to delete a member
router.delete('/members/:id', deleteMember);

module.exports = router;
