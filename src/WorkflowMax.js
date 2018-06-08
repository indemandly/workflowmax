/*eslint import/namespace: [0]*/

!global._babelPolyfill && require('babel-polyfill')
import fromPairs from 'lodash.frompairs'
import * as api from './api'

export default class WorkflowMax {
  constructor ({ apiKey, accountKey }) {
    this.api = fromPairs(Object.keys(api).map(
      apiEntry =>
        [apiEntry,
          fromPairs(Object.keys(api[apiEntry])
            .map(
              method => [method, (...args) =>
                api[apiEntry][method](apiKey, accountKey, ...args),
              ]
            )),
        ],
    ))
  }
}
