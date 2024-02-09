import { useEffect, useState } from 'react'
import PersonCard from './PersonCard'

export default function App() {
  const [people, setPeople] = useState([])

  const fetchData = async () => {
    try {
      const res = await fetch('https://randomuser.me/api/?results=10')
      const json = await res.json()
      setPeople(json.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleClick = () => {
    fetchData()
  }

  return (
    <>
      <button
        className="bg-slate-400 hover:bg-slate-600 m-5 p-2 rounded-full text-white font-bold mx-auto flex"
        onClick={handleClick}
      >
        Generate 10 New Person
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {people.map((person) => (
          <PersonCard
            key={person.email}
            name={person.name.first}
            last={person.name.last}
            email={person.email}
            picture={person.picture.large}
            city={person.location.city}
            state={person.location.state}
          />
        ))}
      </div>
    </>
  )
}
