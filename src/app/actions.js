import { ApiError } from './errors'

// We can export actions using constants and arrow functions. This
// will actually name the action as well
export const getUser = ({ api }) =>
  api.get('/user')
    .then(response => ({ user: response.result.user }))
    .catch((error) => {
      // We created our own error extending CerebralError. We throw
      // a specific message and any details related to it
      throw new ApiError('Could not get user', error.response)
    })

// You can now set state on the module that fired the signal using
// "module". It has the same API as "state"
export const setUser = ({ module, props }) => module.set('user', props.user)

// The base CerebralError has a message, details and stack. You
// extend to new error types to act differently on them, in this case
// we catch it and send error details to some error service
export const notifyApiError = ({ http, props, device }) =>
  http.post('http://error.reporter.com', {
    message: props.error.message,
    details: props.error.details,
    stack: props.error.stack,
    isMobile: device.isMobile()
  })
