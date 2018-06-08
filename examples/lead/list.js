// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Listing leads
const entity = 'lead'
// Mondatory from/to parameters:
const requestParams = [
  {
    name: 'from',
    value: '20180101',
  },
  {
    name: 'to',
    value: '20181201',
  },
]

wfm.api[entity].list(requestParams)
  .then(result => {
    // Received lead list (see: https://www.workflowmax.com/api/lead-methods#GET%20list)
    console.log('Lead list:', result)
    /*
      You should receive:

      <Response api-method="List">
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
