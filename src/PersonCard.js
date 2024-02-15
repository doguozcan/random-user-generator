import React from 'react'

const PersonCard = ({ picture, name, last, email, city, state }) => {
  return (
    <div className="m-5 p-5 rounded-md shadow-lg font-montserrat flex sm:items-center flex-col sm:flex-row bg-slate-300 hover:bg-slate-400 duration-100 text-white text-wrap">
      <img
        className="rounded-full h-24 w-24 object-cover mx-auto sm:mx-0"
        src={picture}
        alt="person's profile"
      />
      <div className="flex flex-col ml-2 mt-4 sm:mt-0 text-center sm:text-left text-sm sm:text-md truncate">
        <p>
          {name} {last}
        </p>
        <p>{email}</p>
        <p>
          {city}, {state}
        </p>
      </div>
    </div>
  )
}

export default PersonCard
