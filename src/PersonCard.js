import React from 'react'

const PersonCard = ({ picture, name, last, email, city, state }) => {
  return (
    <div className="m-5 p-5 rounded-md shadow-lg font-montserrat flex bg-slate-300 text-white text-wrap">
      <img
        className="rounded-full h-24 w-24 object-cover"
        src={picture}
        alt="person's profile"
      />
      <div className="flex flex-col ml-2 ">
        <p className="text-3xl">
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
