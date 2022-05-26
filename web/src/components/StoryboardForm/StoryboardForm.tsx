import { useState } from 'react'
import { useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { RadioGroup } from '@headlessui/react'
import { Form, TextField, Label, Submit, TextAreaField } from '@redwoodjs/forms'
import { FaTiktok, FaYoutube } from 'react-icons/fa'

const CREATE_STORYBOARD = gql`
  mutation CreateStoryboardMutation($input: CreateStoryboardInput!) {
    createStoryboard(input: $input) {
      id
    }
  }
`

const memoryOptions = [{ name: 'tiktok' }, { name: 'youtube' }]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const StoryboardForm = () => {
  const [loading, isLoading] = useState(false)
  const [create] = useMutation(CREATE_STORYBOARD)
  const { currentUser } = useAuth()

  const [mem, setMem] = useState(memoryOptions[0])

  async function handleSubmit(data) {
    isLoading(true)
    try {
      await create({
        variables: {
          input: {
            title: data.title,
            description: data.description,
            channel: mem.name,
            userId: currentUser.sub,
          },
        },
      })
      isLoading(false)
      navigate(routes.dashboard({ id: currentUser.sub as string }))
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <Form className="space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-8">
          <div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-gray-900">
                  Choose Your Channel
                </h2>
              </div>

              <RadioGroup value={mem} onChange={setMem} className="mt-2">
                <RadioGroup.Label className="sr-only">
                  Choose your channel
                </RadioGroup.Label>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {memoryOptions.map((option) => (
                    <RadioGroup.Option
                      id={option.name}
                      key={option.name}
                      value={option}
                      className={({ active, checked }) =>
                        classNames(
                          'cursor-pointer focus:outline-none',
                          active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                          checked
                            ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                            : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                          'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                        )
                      }
                    >
                      <RadioGroup.Label
                        as="span"
                        className="flex justify-center items-center"
                      >
                        {option.name == 'tiktok' ? (
                          <>
                            <FaTiktok className="mr-3 text-lg" /> TikTok
                          </>
                        ) : (
                          <>
                            <FaYoutube className="mr-3 text-lg" /> Youtube
                          </>
                        )}
                      </RadioGroup.Label>
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <Label
                  name="title"
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </Label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <TextField
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <Label
                  name="description"
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </Label>
                <div className="mt-1">
                  <TextAreaField
                    id="description"
                    name="description"
                    rows={3}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-start">
            <Submit className="inline-flex w-60 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {loading ? (
                <>
                  <svg
                    role="status"
                    className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </>
              ) : (
                'Create Storyboard'
              )}
            </Submit>
          </div>
        </div>
      </Form>
    </>
  )
}

export default StoryboardForm
