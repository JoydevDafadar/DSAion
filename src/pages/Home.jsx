import React from 'react'
import { useSelector } from 'react-redux'
import { selectStatus } from '../features/counter/counterSlice'

const Home = () => {

    const status = useSelector(selectStatus);

  return (
    <div className=' text-green'>Home {status}</div>
  )
}

export default Home