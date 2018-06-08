// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Searching clients
const entity = 'client'

// Searching for "Andrew"
const searchString = 'Andrew'

wfm.api[entity].search([{ name: 'query', value: searchString}])
  .then(result => {
    // Received client list (see: https://www.workflowmax.com/api/client-methods#GET%20search)
    console.log('Client list:', result)
    /*
      You should receive:

      <Response api-method="List">
        <Status>OK</Status>
        <Clients>
          <Client>
            ...
          </Client>
          <Client>
            ...
          </Client>
        </Clients>
      </Response>
    */    
  })
  .catch(error => {
    console.log('Error:', error)
  })
