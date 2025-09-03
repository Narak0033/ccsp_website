import React from 'react'
import ProjectCard from '@/components/Project/ProjectCard'
const AllProjects = () => {
  return (
    <div className='overflow-hidden'>
            <div className="container pt-20 my-20 ">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col space-y-6 mb-12">
          <div className="text-center space-y-4">
            <h1 className="text-header">
              CCSP Projects
            </h1>
          </div>
          
          <p className="text-center text-gray-200 subtext ">
            Highlighting the diverse projects organized by student clubs, dedicated to connecting knowledge with community service.
          </p>
        </div>
          <ProjectCard />
      </div>
    </div>
  )
}

export default AllProjects
