import Header from 'src/components/Header'
import { useAuth } from '@redwoodjs/auth'

type CoreLayoutProps = {
  children?: React.ReactNode
}

const CoreLayout = ({ children }: CoreLayoutProps) => {
  const { currentUser } = useAuth()
  return (
    <div className="min-h-full">
      <Header currentUser={currentUser} />
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-8 pb-6">
          {children}
        </div>
      </main>
    </div>
  )
}

export default CoreLayout
