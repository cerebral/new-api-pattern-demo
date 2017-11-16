import { Provider } from 'cerebral'

// The Provider factory automatically caches
// and wraps for debugger
export const device = Provider({
  isMobile () {
    return navigator.useragent.contains('mobile')
  },
  isDesktop () {
    return !navigator.useragent.contains('mobile')
  }
})
