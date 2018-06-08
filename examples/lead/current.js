// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Listing current leads
const entity = 'lead'

wfm.api[entity].current()
  .then(result => {
    // Received lead list (see: https://www.workflowmax.com/api/lead-methods#GET%20current)
    console.log('Lead list:', result)
    /*
      You should receive:

      <Response api-method="Current">
        <Status>OK</Status>
        <Leads>
          <Lead>
            <ID>1</ID>
            ...
          </Lead>
          <Lead>
            <ID>2</ID>
            ...
          </Lead>
          ...
        </Leads>
      </Response>
    */
  })
  .catch(error => {
    console.log('Error:', error)
  })
