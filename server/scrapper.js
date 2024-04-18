const fetch = require('node-fetch')
const fs = require('fs')
const config = require('./config/config')

async function scrapeAndSave() {
  try {
    const response = await fetch(config.apiUrl)
    const data = await response.json()
    fs.writeFileSync(`./public/${config.fileName}`, JSON.stringify(data))
    console.log('Data scraped and saved successfully!')
  } catch (error) {
    console.error('Error scraping data:', error)
  }
}

const runScrapper = () => {
  setInterval(scrapeAndSave, 5 * 60 * 1000)
}

runScrapper()
