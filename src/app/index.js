import { Module } from 'cerebral'
import HttpProvider from '@cerebral/http'
import { ApiError } from './errors'
import * as sequences from './sequences'

// Use the Module factory to define
// a module
export default Module({
  state: {
    isLoading: false,
    user: null
  },
  // Providers are now defined with object, which
  // allows multiple provider instances with different
  // names
  providers: {
    http: HttpProvider(),
    api: HttpProvider({ baseUrl: '/api' })
  },
  signals: {
    initialized: sequences.initialize
  },
  // No need to new Map() anymore
  catch: [
    [ApiError, sequences.catchApiError]
  ]
})
