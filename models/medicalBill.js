const { v4: uuidv4 } = require('uuid');

class MedicalBill {
  constructor(patientName, patientAddress, hospitalName, dateOfService, billAmount) {
    const uuid = uuidv4();
    this.id = uuid.substring(0, 8);
    this.patientName = patientName;
    this.patientAddress = patientAddress;
    this.hospitalName = hospitalName;
    this.dateOfService = dateOfService;
    this.billAmount = billAmount;
  }
}

module.exports = MedicalBill;