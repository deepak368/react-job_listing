import React from 'react'
import Hero from '../components/Hero'
import Homecard from '../components/Homecard'
import Joblisting from '../components/JobListing'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <Homecard />
    <Joblisting />
    <ViewAllJobs />
    </>
  )
}

export default HomePage