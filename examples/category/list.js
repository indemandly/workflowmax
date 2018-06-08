// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Listing categories
const entity = 'category'

wfm.api[entity].list()
  .then(result => {
    // Received client list (see: https://www.workflowmax.com/api/category-methods#GET%20list)
    console.log('Category list:', result)
    /*
      You should receive:

      <Response api-method="List">
        <Status>OK</Status>
        <Categories>
          <Category>
            <ID>1</ID>
            <Name>Category 1 name</Name>
          </Category>
          <Category>
            <ID>2</ID>
            <Name>Category2 name</Name>
          </Category>
          ...
        </Categories>
      </Response>
    */
  })
  .catch(error => {
    console.log('Error:', error)
  })
