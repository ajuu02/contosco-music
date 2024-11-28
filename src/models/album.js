const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Album = sequelize.define('Album', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artistId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Album;