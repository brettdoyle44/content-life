// import { Link, routes } from '@redwoodjs/router'
// import { MetaTags } from '@redwoodjs/web'
// import { useAuth } from '@redwoodjs/auth'
import StoryboardsCell from 'src/components/StoryboardsCell'
import { useAuth } from '@redwoodjs/auth'
import { Redirect, routes, useParams } from '@redwoodjs/router'

const DashboardPage = () => {
  const { currentUser } = useAuth()
  const { id } = useParams()
  if (id != (currentUser.sub as string)) {
    return <Redirect to={routes.dashboard({ id: currentUser.sub as string })} />
  }
  return (
    <>
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Dashboard
          </h2>
        </div>
      </div>
      <StoryboardsCell userId={currentUser.sub as string} />
    </>
  )
}

export default DashboardPage
