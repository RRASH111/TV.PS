import React from 'react'

interface MobileMenuProps {
    visible?: boolean;
  }

const CategoriesMenu: React.FC <MobileMenuProps>= ({ visible }) => {
    if (!visible) {
      return null;
    }
  return (
    
    <div className="bg-gradient-to-bl from-red-600 via-slate-900 rounded-lg to-green-700 w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">
          Home
        </div>
        <hr className=' border-slate-900'/>
        <div className="px-3 text-center text-white hover:underline">
          Pre-1948 Palestine
        </div>
        <hr className=' border-slate-900'/>
        <div className="px-3 text-center text-white hover:underline">
        Nakba and Palestinian Displacement
        </div>
        <hr className=' border-slate-900'/>
        <div className="px-3 text-center text-white hover:underline">
        Occupation and Intifada Era
        </div>
        <hr className=' border-slate-900'/>
        <div className="px-3 text-center text-white hover:underline">
        Palestinian Diaspora
        </div>
        <hr className=' border-slate-900'/>
        <div className="px-3 text-center text-white hover:underline">
        Oslo Accords and Peace Process
        </div>
        <hr className=' border-slate-900'/>
        <div className="px-3 text-center text-white hover:underline">
        Recent Events and Contemporary Issues
        </div>
        <div className="px-3 text-center text-white hover:underline">
        My List
        </div>
        
      
      </div>
    </div>
  )
}

export default CategoriesMenu