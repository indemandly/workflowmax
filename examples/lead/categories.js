// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Listing leads
const entity = 'lead'

wfm.api[entity].categories()
  .then(result => {
    // Received categories list (see: https://www.workflowmax.com/api/lead-methods#GET%20categories)
    console.log('Categories list:', result)
    /*
      You should receive:

      <Response api-method="Categories">
        <Status>OK</Status>
        <Categories>
          <Category>
            <ID>1</ID>
            <Name>Category 1</Name>
          </Category>
          <Category>
            <ID>2</ID>
            <Name>Category 2</Name>
          </Category>
          ...
        </Categories>
      </Response>
    */
  })
  .catch(error => {
    console.log('Error:', error)
  })
