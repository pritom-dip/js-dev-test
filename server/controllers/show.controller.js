const config = require('../config/config')
const fs = require('fs')
const path = require('path')

const getAllShows = (req, res) => {
  try {
    const filePath = path.join(__dirname, 'public', config.fileName)

    if (!filePath.startsWith(path.join(__dirname, 'public'))) {
      return res.status(400).json({ error: 'Invalid file request' })
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(404).json({ error: 'File not found' })
      }

      try {
        const shows = JSON.parse(data)
        return res.json(shows)
      } catch (parseErr) {
        return res.status(500).json({ error: 'Error parsing data' })
      }
    })
  } catch (error) {
    console.error('Error reading file:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = {
  getAllShows
}
