import { Provider } from 'cerebral'

export const device = Provider({
  isMobile () {
    return navigator.useragent.contains('mobile')
  },
  isDesktop () {
    return !navigator.useragent.contains('mobile')
  }
})
