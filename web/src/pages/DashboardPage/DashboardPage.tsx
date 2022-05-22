import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const DashboardPage = () => {
  const { logOut } = useAuth()
  const handleClick = () => {
    logOut()
  }
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <h1>DashboardPage</h1>
      <p>
        Find me in <code>./web/src/pages/DashboardPage/DashboardPage.tsx</code>
      </p>
      <p>
        My default route is named <code>dashboard</code>, link to me with `
        <Link to={routes.dashboard()}>Dashboard</Link>`
      </p>
      <button onClick={handleClick}>Logout</button>
    </>
  )
}

export default DashboardPage
