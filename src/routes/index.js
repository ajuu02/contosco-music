const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');
const albumController = require('../controllers/albumController');
const playlistController = require('../controllers/playlistController');

router.get('/artists', artistController.getAllArtists);
router.get('/albums', albumController.getAllAlbums);
router.get('/playlists', playlistController.getAllPlaylists);

module.exports = router;