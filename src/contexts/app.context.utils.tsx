import { getAccessTokenFromLS, getProfileFromLS } from '../utils/auth'
import type { AppContextInterface } from './app.context'

export const getInitialAppContext: () => AppContextInterface = () => ({
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  reset: () => null
})
