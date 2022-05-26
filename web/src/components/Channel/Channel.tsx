import { FaTiktok, FaYoutube } from 'react-icons/fa'

const Channel = ({ channel }) => {
  if (channel === 'tiktok') {
    return (
      <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-black">
        <span className="inline-flex justify-center items-center h-full w-full text-white">
          <FaTiktok />
        </span>
      </span>
    )
  }
  if (channel === 'youtube') {
    return (
      <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-red-500">
        <span className="inline-flex justify-center items-center h-full w-full text-white">
          <FaYoutube />
        </span>
      </span>
    )
  }
}

export default Channel
