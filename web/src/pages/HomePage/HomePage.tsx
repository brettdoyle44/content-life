import { Redirect, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Redirect to={routes.dashboard()} />
  }
  return <Redirect to={routes.signin()} />
}

export default HomePage
