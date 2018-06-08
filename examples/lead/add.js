// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Adding new lead
const entity = 'lead'
// Minimalistic lead data
const leadData = '<Lead><Name>Lead name</Name><ClientID>1000000</ClientID><OwnerID>1000001</OwnerID></Lead>'

wfm.api[entity].add(leadData)
  .then(result => {
    // Received lead details (see: https://www.workflowmax.com/api/lead-methods#POST%20add)
    console.log('Lead details:', result)
    /*
      You should receive:

      <Response api-method="Add">
        <Status>OK</Status>
        <Lead>
          <ID>1000002</ID>
          ...
        </Lead>
      </Response>

      Examples of errorrs:

      <Response api-method="Add">
        <Status>ERROR</Status>
        <ErrorDescription>Invalid owner</ErrorDescription>
      </Response>

      <Response api-method="Add">
        <Status>ERROR</Status>
        <ErrorDescription>Message not in expected format. The following required element was missing - /Lead/ClientID</ErrorDescription>
      </Response>

    */
  })
  .catch(error => {
    console.log('Error:', error)
  })
