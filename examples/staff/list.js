// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Listing clients
const entity = 'staff'

wfm.api[entity].list()
  .then(result => {
    // Received staff list (see: https://www.workflowmax.com/api/staff-methods#GET%20list)
    console.log('Staff list:', result)
    /*
      You should receive:

      <Response api-method="List">
        <Status>OK</Status>
        <StaffList>
          <Staff>
            <ID>1000001</ID>
            ...
          </Staff>
        </StaffList>
      </Response>
    */
  })
  .catch(error => {
    console.log('Error:', error)
  })
