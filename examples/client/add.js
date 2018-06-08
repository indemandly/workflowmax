// WFM API class
const WorkflowMax = require('../instance')

// Your API keys
const credentials = require('../credentials')

// API instance
const wfm = new WorkflowMax(credentials)

// Adding new client
const entity = 'client'
// Minimalistic client data

const clientData = '<Client><Name>Client name</Name></Client>'

wfm.api[entity].add(clientData)
  .then(result => {
    // Received client details (see: https://www.workflowmax.com/api/client-methods#POST%20add)
    console.log('Client details:', result)
    /*
      You should receive:

      <Response api-method="Add">
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
