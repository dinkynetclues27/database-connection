const { DataTypes } = require('sequelize');
const sequelize = require('../database')

const Student = sequelize.define('Student', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    DOB: {
        type:DataTypes.DATEONLY,
        allowNull: false,
    }

});

module.exports = Student;
