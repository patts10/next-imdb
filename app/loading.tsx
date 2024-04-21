import { FaTruckLoading } from 'react-icons/fa'

//TODO: Create a loading component
export default function loading() {
  return (
    <div className='flex justify-center mt-1'>
      <FaTruckLoading className='text-amber-600 animate-spin h-52' />
    </div>
  )
}
