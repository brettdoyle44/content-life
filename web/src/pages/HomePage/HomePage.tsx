import { Redirect, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  if (isAuthenticated) {
    return <Redirect to={routes.dashboard({ id: currentUser.sub as string })} />
  }
  return <Redirect to={routes.signin()} />
}

export default HomePage
