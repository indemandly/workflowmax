// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Getting client contact details by contact id
const entity = 'client'
const method = 'contact'
const contactId = '10000004'

wfm.api.raw.get(entity, method + '/' + contactId)
  .then(result => {
    // Received contact details (see: https://www.workflowmax.com/api/client-methods#GET%20contact/[id])
    console.log('Contact details:', result)
    /*
      You should receive:

      <Response api-method="Contact">
        <Status>OK</Status>
        <Contact>
          <ID>10000004</ID>
          ...
        </Contact>
      </Response>

      Or error like this:

      <Response api-method="Contact">
        <Status>ERROR</Status>
        <ErrorDescription>Invalid contact identifier</ErrorDescription>
      </Response>
    */
  })
  .catch(error => {
    console.log('Error:', error)
  })
