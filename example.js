const chrome = require('.')

// Example 1: Regular Chrome with GUI
const ps = chrome({
  uri: 'https://github.com/'
})
ps.on('error', console.error)

// Example 2: Headless Chrome (no screen needed)
const headlessPs = chrome({
  uri: 'https://github.com/',
  headless: true
})
headlessPs.on('error', console.error)