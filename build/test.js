const { fetchSave } = require('./handlers')
// const resources = require('./datasources')
const statesDaily = require('./datasources/statesDaily')
// const usCurrent = require('./datasources/usCurrent')
const { states } = require('./datasources/states')
const screenshots = require('./datasources/screenshots')

// Test a single resouce.
fetchSave(states)
