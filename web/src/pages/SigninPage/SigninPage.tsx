import { Redirect, routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { FaGoogle } from 'react-icons/fa'

const SigninPage = () => {
  const { client: supabase, isAuthenticated, currentUser } = useAuth()
  async function signInWithGoogle() {
    try {
      await supabase.auth.signIn({
        provider: 'google',
      })
      navigate(routes.dashboard({ id: currentUser.sub as string }))
    } catch (error) {
      console.log('error:  ', error)
    }
  }
  async function onSubmit(data) {
    try {
      await supabase.auth.signIn({
        email: data.email,
      })
      navigate(routes.dashboard({ id: currentUser.sub as string }))
    } catch (error) {
      console.error('error:  ', error)
    }
  }
  if (isAuthenticated)
    return <Redirect to={routes.dashboard({ id: currentUser.sub as string })} />

  return (
    <>
      <MetaTags title="Signin" description="Signin page" />

      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="the-tavern-logo.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-1">
                  <TextField
                    id="email"
                    name="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <Submit className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign in
                </Submit>
              </div>
            </Form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    {' '}
                    Or continue with{' '}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <div>
                  <button
                    onClick={signInWithGoogle}
                    className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <FaGoogle className="mr-2" /> Sign up with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SigninPage
