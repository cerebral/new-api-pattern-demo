// This is a new pattern without operators that enforces
// as declarative code as possible in the sequences
import * as actions from './actions'
import * as factories from './factories'

// We export multiple sequences from one file
export const initialize = [
  factories.setLoadingApp(true),
  actions.getUser,
  actions.setUser,
  factories.setLoadingApp(false)
]

// It is all descriptive, no analyzing generic operators
// and their paths to understand what they do. Everything
// is super explicit and declarative
export const catchApiError = actions.notifyApiError
