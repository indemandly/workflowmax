# WorkflowMax API for Node.js

## Currently supported functions

```
client
 list([params])
 search([params])
 get(id, [params])
 add(data, [params])
 update(data, [params])
 archive(data, [params])
 delete(data, [params])

 getContact(id, [params])
 addContact(params)
 updateContact(id, params)
 deleteContact(id, params)

 rawGet(method, [params])
 rawPost(method, data,[params])
 rawPut(method, data, [params])
 rawDelete(method, data, [params])

lead
 list({ from: '20180101', to: '20190101', ...params })
 current([params])
 get(id, [params])
 add(data, [params])

 categories([params])

 rawGet(method, [params])
 rawPost(method, data,[params])
 rawPut(method, data, [params])
 rawDelete(method, data, [params])

categories
 list([params])

 rawGet(method, [params])
 rawPost(method, data,[params])
 rawPut(method, data, [params])
 rawDelete(method, data, [params])

staff
 list([params])

 rawGet(method, [params])
 rawPost(method, data,[params])
 rawPut(method, data, [params])
 rawDelete(method, data, [params])

job
 list({ from: '20180101', to: '20190101', ...params })
 current([params])
 get(id, [params])
 add(data, [params])
 update(data, [params])
 
 rawGet(method, [params])
 rawPost(method, data,[params])
 rawPut(method, data, [params])
 rawDelete(method, data, [params])

raw
 get(entity, method, [params])
 post(entity, method, data,[params])
 put(entity, method, data, [params])
 delete(entity, method, data, [params])
```

P.S. All unsupported methods can be reached via `raw` requests now

## Usage

```sh
npm install workflowmax --save
```
or Yarn

```
yarn add workflowmax
```

```js
var WorkflowMax = require('workflowmax');
var wfm = new WorkflowMax({ apiKey: 'YOUR_API_KEY', accountKey: 'YOUR_ACCOUNT_KEY'});

wfm.api.client.list()
  .then( function (clientList) {
    console.log(clientList);
  });
```

## Raw requests

Currently not all API entities and methods have realisations in this API, but you can make raw requests.

You can use `get`, `post`, `put`, `delete` requests according to WorkflowMax documentation.

For example raw request for previous get client list code will be:

```js
wfm.api.raw.get('client', 'list')
  .then( function (clientList) {
    console.log(clientList);
  });
```

Get client contact details via raw request:

```js
wfm.api.raw.get('client', 'contact/10000004')
  .then( function (contactDetails) {
    console.log(contactDetails);
  });
```

All existing entity methods (e.g 'wfm.api.lead') also provide raw handlers.

They are called `rawGet`, `rawPost`, `rawPut` and `rawDelete`.

Example for client contact details:

```js
wfm.api.client.rawGet('contact/10000004')
  .then( function (contactDetails) {
    console.log(contactDetails);
  });
```

## Results

You will receive unmodified results in format that is used by WorkflowMax, kinda of XML.

## Errors

### Thrown errors:

General http errors and auth errors will be thrown as `axios` error instance without modification

Also some request errors (e.g. trying to least leads without from/to additional parameters) will be thrown as 500 error from WorkflowMax servers

### Errors in results:

WorkflowMax sends errors in similar way as results, so we.

For example trying to get client using wrong id will result in:

```
<Response api-method="Get">
  <Status>ERROR</Status>
  <ErrorDescription>Invalid client identifier</ErrorDescription>
</Response>
```

While normal result will be like:

```
<Response api-method="Get">
  <Status>OK</Status>
  <Client>
    ...
  </Client>
</Response>
```

## Examples

Examples are located at https://github.com/indemandly/workflowmax/tree/master/examples

To run examples:

1) Clone repo & install dependencies:
```sh
git clone https://github.com/indemandly/workflowmax.git`
cd workflowmax
npm install
```

2) Open `examples/credentials.js` and put your API keys obtained from WorkflowMax (how to get keys: https://www.workflowmax.com/api/authentication)

3) List clients:
```sh
node ./examples/client/list
```

If you will get error at this step - check your credentials (step 2), to check your credentials in browser try this https://api.workflowmax.com/client.api/list?apiKey=YOUR_API_KEY&accountKey=YOUR_ACCOUNT_KEY

By default examples are using built version of this package, but you can change it in `examples/instance.js` by uncommenting one of lines:

```js
const WorkflowMax = require('../build') // Built, node 4+ compatible
```

or

```js
const WorkflowMax = require('../src') // ES6 (babel-node run)
```

P.S. to use source version you need to run scripts with `babel-node` e.g. `babel-node ./examples/client/list`

## Building

If you want to make own build just use `build` command:
```sh
npm run build
```

or Yarn:

```
yarn build
```
