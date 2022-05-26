import Channel from 'src/components/Channel'
import { Link } from '@redwoodjs/router'

const Storyboard = ({ title, description, channel, id }) => {
  return (
    <div className="max-w-sm py-4 px-8 bg-white shadow-lg rounded-lg mb-6">
      <Link to={`/storyboard/${id}`}>
        <div className="w-16 mx-auto relative -mt-10 mb-3">
          <Channel channel={channel} />
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600">{description} </p>
        </div>
      </Link>

      {/* <div className="flex justify-center md:justify-end -mt-8">
        <div className="w-10 h-10 object-cover">
          <Channel channel={channel} />
        </div>
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div> */}
    </div>
  )
}

export default Storyboard
