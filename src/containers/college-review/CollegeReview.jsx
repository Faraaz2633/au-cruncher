import React, { useContext } from 'react'
import { IoCreateOutline } from 'react-icons/io5';
import { AuthContext } from '../../context/Context';
import { MdOutlineLogin, MdOutlineLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CollegeReview = () => {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  return (
    <section className="min-h-screen w-[90%] m-auto pt-12">
      <div className="bg-[#21222D] flex justify-between items-center p-4 md:p-6 rounded-md">
        <div className="text-white font-bold md:text-lg">
          College <span className="text-[#0689ff]">Review</span>
        </div>

        <div>
          <button title="Create Post" className="text-white font-bold text-xl md:text-2xl bg-[#0689ff] p-3 rounded-full hover:bg-white hover:text-[#0689ff] transition duration-200 mr-2"><IoCreateOutline /></button>
          {isAuth ?
            <button title="Login" className="text-white font-bold text-xl  md:text-2xl bg-[#0689ff] p-3 rounded-full hover:bg-white hover:text-[#0689ff] transition duration-200"><MdOutlineLogin /></button>
            :
            <button title="Logout"  className="text-white font-bold text-xl md:text-2xl bg-[#0689ff] p-3 rounded-full hover:bg-white hover:text-[#0689ff] transition duration-200"><MdOutlineLogout /></button>
          }
        </div>
      </div>
    </section>
  )
}

export default CollegeReview