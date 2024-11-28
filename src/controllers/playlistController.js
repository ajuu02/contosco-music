const Playlist = require('../models/playlist');

exports.getAllPlaylists = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await Playlist.findAndCountAll({
        limit,
        offset
    });

    res.json({
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        playlists: rows
    });
};