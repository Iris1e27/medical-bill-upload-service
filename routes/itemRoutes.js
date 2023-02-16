const express = require('express');
const { body } = require('express-validator');
const { getMedicalBills, createMedicalBill, updateMedicalBill, deleteMedicalBill } = require('../controllers/itemController');

const router = express.Router();

router.get('/', getMedicalBills);

router.post('/', [
  body('patientName').notEmpty(),
  body('patientAddress').notEmpty(),
  body('hospitalName').notEmpty(),
  body('dateOfService').isISO8601().toDate(),
  body('billAmount').matches(/^\d+(\.\d{1,2})?$/),
], createMedicalBill);

router.patch('/:id', [
  body('patientName').notEmpty(),
  body('patientAddress').notEmpty(),
  body('hospitalName').notEmpty(),
  body('dateOfService').isISO8601().toDate(),
  body('billAmount').matches(/^\d+(\.\d{1,2})?$/),
], updateMedicalBill);

router.delete('/:id', deleteMedicalBill);

module.exports = router;