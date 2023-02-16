const { validationResult } = require('express-validator');
const MedicalBill = require('../models/medicalBill');

let medicalBills = [];

exports.getMedicalBills = (req, res) => {
  res.json(medicalBills);
};

exports.createMedicalBill = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { patientName, patientAddress, hospitalName, dateOfService, billAmount } = req.body;
  const newBill = new MedicalBill(patientName, patientAddress, hospitalName, dateOfService, billAmount);
  medicalBills.push(newBill);
  res.status(201).json(newBill);
};

exports.updateMedicalBill = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = req.params.id;
    const { patientName, patientAddress, hospitalName, dateOfService, billAmount } = req.body;

    const index = medicalBills.findIndex((bill) => bill.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Bill not found" });
    }

    medicalBills[index] = { id, patientName, patientAddress, hospitalName, dateOfService, billAmount };

    res.json(medicalBills[index]);
};

exports.deleteMedicalBill = (req, res) => {
  const id = req.params.id;

  const index = medicalBills.findIndex((bill) => bill.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Bill not found" });
  }

  medicalBills.splice(index, 1);

  res.sendStatus(204);
};