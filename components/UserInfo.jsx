import Image from 'next/image'
import React from 'react'

const UserInfo = () => {
    return (
      <div>
            <div className='bg-emerald-400 px-4 flex items-center space-x-2 py-4'>
                <Image className='rounded-full h-10 w-10' src={'/bike.jpg'} height={200} width={200} alt="profile" />
                <p className='font-bold text-md'>Percy Michael</p>
            </div>  

            <div className='flex justify-evenly'>
                <p className=''>1</p>
                <p>2</p>
            </div>
      </div>
     
  )
}

export default UserInfo