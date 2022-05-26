import Storyboard from 'src/components/Storyboard'

import type { StoryboardsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { PlusIcon } from '@heroicons/react/outline'
import { navigate, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query StoryboardsQuery($userId: String!) {
    userstoryboards: user(id: $userId) {
      storyboards {
        id
        title
        description
        channel
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  async function handleNewStoryboard() {
    try {
      navigate(routes.createStoryboard())
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className="text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">No storyboards</h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating your first storyboard.
      </p>
      <div className="mt-6">
        <button
          onClick={handleNewStoryboard}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New Storyboard
        </button>
      </div>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  userstoryboards,
}: CellSuccessProps<StoryboardsQuery>) => {
  async function handleNewStoryboard() {
    try {
      navigate(routes.createStoryboard())
    } catch (e) {
      console.error(e)
    }
  }

  if (userstoryboards.storyboards[0]) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 py-11">
        {userstoryboards.storyboards.map(
          (storyboard: {
            id: string
            title: string
            description: string
            channel: string
          }) => (
            <Storyboard
              key={storyboard.id}
              title={storyboard.title}
              description={storyboard.description}
              channel={storyboard.channel}
              id={storyboard.id}
            />
          )
        )}
      </div>
    )
  }
  return (
    <div className="text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">No storyboards</h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating your first storyboard.
      </p>
      <div className="mt-6">
        <button
          onClick={handleNewStoryboard}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New Storyboard
        </button>
      </div>
    </div>
  )
}
