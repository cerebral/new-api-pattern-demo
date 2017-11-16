import { Controller } from 'cerebral'
import app from './app'

let devtools = null

if (IS_PRODUCTION) {
  devtools = require('cerebral/devtools')({
    host: 'localhost:8585'
  })
}

// The controller is now instantiated with a module. The second
// argument is the options, where for example devtools is configured
export default Controller(app, {
  devtools
})
