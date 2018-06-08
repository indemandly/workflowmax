// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Updateing existing client by ID
const entity = 'client'
// We need to pass id to archive client
const clientData = '<Client><ID>1000000</ID></Client>'

wfm.api[entity].delete(clientData)
  .then(result => {
    // Received client details (see: https://www.workflowmax.com/api/client-methods#POST%20delete)
    console.log('Status response: ', result)
    /*
      You should receive:

      <Response api-method="Delete">
        <Status>OK</Status>
      </Response>

      In case you put wrong id in clientData:

      <Response api-method="Delete">
        <Status>ERROR</Status>
        <ErrorDescription>Invalid client identifier</ErrorDescription>
      </Response>
    */
  })
  .catch(error => {
    console.log('Error:', error)
  })
