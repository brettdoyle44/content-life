import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

type StoryboardPageProps = {
  id: unknown
}

const StoryboardPage = ({ id }: StoryboardPageProps) => {
  return (
    <>
      <MetaTags title="Storyboard" description="Storyboard page" />

      <h1>StoryboardPage</h1>
      <p>
        Find me in <code>./web/src/pages/StoryboardPage/StoryboardPage.tsx</code>
      </p>
      <p>
        My default route is named <code>storyboard</code>, link to me with `
        <Link to={routes.storyboard({ id: 42 })}>Storyboard 42</Link>`
      </p>
      <p>The parameter passed to me is {id}</p>
    </>
  )
}

export default StoryboardPage
