// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Updating existing client by ID
const entity = 'client'
// Minimalistic client data
const clientData = '<Client><ID>1000000</ID><Name>John Doe</Name><Email>john@doe.com</Email></Client>'

wfm.api[entity].update(clientData)
  .then(result => {
    // Received client details (see: https://www.workflowmax.com/api/client-methods#PUT%20update)
    console.log('Client details:', result)
    /*
      You should receive:

      <Response api-method="Update">
        <Status>OK</Status>
        <Client>
          <ID>1000000</ID>
          <Name>John Doe</Name>
          <Email>john@doe.com</Email>
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

      In case you forgot to fill name:

      <Response api-method="Add">
        <Status>ERROR</Status>
        <ErrorDescription>The client name is required</ErrorDescription>
      </Response>
    */
  })
  .catch(error => {
    console.log('Error:', error)
  })
