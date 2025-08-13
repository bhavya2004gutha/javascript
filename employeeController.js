const Employee = require('../models/Employee'); 

const createEmployee = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;

    const employee = new Employee({
      name,
      email,
      phone,
      city,
    });

    await employee.save(); 

    res.status(201).json(employee); 
  } catch (error) {
    console.log("There is an error:", error);
    res.status(501).json({ message: 'Server error' });
  }
};

module.exports = { createEmployee };