const { DataTypes } = require('sequelize')
const sequelize = require('../../../config/db')
const Resume = require('./Resume')

const ForeignLanguage = sequelize.define('ForeignLanguage', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    level: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: false,
})

ForeignLanguage.belongsTo(Resume, {foreignKey: 'resumeId'})

module.exports = ForeignLanguage