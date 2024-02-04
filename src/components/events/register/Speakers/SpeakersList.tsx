import React from 'react'
import SpeakerCard from './SpeakerCard'

export interface Speaker {
  name: string
  img: string
  about: string
}
const SpeakersList = () => {
  const speakers = Array.from(Array(3).keys()).map(() => ({
    name: 'Speaker Name',
    about: 'Office',
    img: 'https://res.cloudinary.com/c99/image/upload/v1704981693/Placeholders/Screenshot_2024-01-11_at_15.53.47.png',
  }))
  return (
    <div>
      <div className="my-4 text-xl font-semibold">Speakers List</div>
      {speakers.map((speaker) => (
        <SpeakerCard speaker={speaker} key={speaker.name} />
      ))}
    </div>
  )
}

export default SpeakersList
