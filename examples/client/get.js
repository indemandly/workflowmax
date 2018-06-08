// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Getting client details
const entity = 'client'
// Getting client by id

wfm.api[entity].get(1000000)
  .then(result => {
    // Received client details (see: https://www.workflowmax.com/api/client-methods#GET%20get/[id])
    console.log('Client details:', result)
    /*
      You should receive:

      <Response api-method="Get">
        <Status>OK</Status>
        <Client>
          <ID>1000000</ID>
          <Name>Client name</Name>
          <Address></Address>
          <City></City>
          <Region></Region>
          <PostCode></PostCode>
          <Country></Country>
          <PostalAddress></PostalAddress>
          <PostalCity></PostalCity>
          <PostalRegion></PostalRegion>
          <PostalPostCode></PostalPostCode>
          <PostalCountry></PostalCountry>
          <Phone></Phone>
          <Fax></Fax>
          <Website></Website>
          <ReferralSource></ReferralSource>
          <ExportCode></ExportCode>
          <IsProspect>No</IsProspect>
          <IsArchived>No</IsArchived>
          <IsDeleted>No</IsDeleted><Contacts/><Notes/>
          <UUID>11111111-1111-1111-1111-111111111111</UUID>
        </Client>
      </Response>

      In case you used wrong user id:

      <Response api-method="Get">
        <Status>ERROR</Status>
        <ErrorDescription>Invalid client identifier</ErrorDescription>
      </Response>
    */
  })
  .catch(error => {
    console.log('Error:', error)
  })
