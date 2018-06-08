// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Updateing existing client by ID
const entity = 'client'
// We need to pass id to archive client
const clientData = '<Client><ID>1000000</ID></Client>'

wfm.api[entity].archive(clientData)
  .then(result => {
    // Received client details (see: https://www.workflowmax.com/api/client-methods#PUT%20archive)
    console.log('Client details:', result)
    /*
      You should receive:

      <Response api-method="Archive">
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
          <IsArchived>Yes</IsArchived> <- This means archivation successfull
          <IsDeleted>No</IsDeleted><Contacts/><Notes/>
          <UUID>11111111-1111-1111-1111-111111111111</UUID>
        </Client>
      </Response>

      In case you put wrong id in clientData:

      <Response api-method="Archive">
        <Status>ERROR</Status>
        <ErrorDescription>Invalid client identifier</ErrorDescription>
      </Response>
    */
  })
  .catch(error => {
    console.log('Error:', error)
  })
