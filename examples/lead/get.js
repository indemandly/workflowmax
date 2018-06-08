// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Getting lead details
const entity = 'lead'
// Getting lead by id

wfm.api[entity].get(1000000)
  .then(result => {
    // Received lead details (see: https://www.workflowmax.com/api/lead-methods#GET%20get/[id])
    console.log('Lead details:', result)
    /*
      You should receive:

      <Response api-method="Get">
        <Status>OK</Status>
        <Lead>
          <ID>1000000</ID>
          ...
      </Response>

      In case you used wrong user id:

      <Response api-method="Get">
        <Status>ERROR</Status>
        <ErrorDescription>Invalid lead identifier</ErrorDescription>
      </Response>
    */
  })
  .catch(error => {
    console.log('Error:', error)
  })
