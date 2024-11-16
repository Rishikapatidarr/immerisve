// import React from 'react'

// const RightSideBar = () => {
//   return (
//     <div > 
//       RightSide bar
//     </div>
//   )
// }

// export default RightSideBar
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
// import SuggestedUsers from './SuggestedUsers';
import { RiLogoutBoxLine } from "react-icons/ri";

const RightSidebar = () => {
  const { user } = useSelector(store => store.auth);
  return (
    <div className='w-fit my-10 pr-32'>
      <div className='flex items-center gap-2'>
        <Link to="/home">
          <Avatar>
            <AvatarImage src=" https://github.com/shadcn.png" alt="post_image" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div>
          <h1 className='font-semibold text-xl'><Link to="/profile">Profile</Link></h1>
          {/* <span className='text-gray-600 text-m'>Bio here....</span> */}
         
          </div>
      </div>
      <div className='flex mt-4'>
      <RiLogoutBoxLine className='text-2xl'/>
          <span className='text-xl ml-5 '>Logout</span>
          </div>
      
      {/* <SuggestedUsers/> */}
    </div>
  )
}

export default RightSidebar