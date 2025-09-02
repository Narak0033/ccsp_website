import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from 'lucide-react'

const ClubProject = () => {
  return (
      <div className="container">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col space-y-6 mb-12">
          <div className="text-center space-y-4">
            <h1 className="text-header">
              Our Projects
            </h1>
          </div>
          
          <p className="text-center text-gray-200 subtext ">
            Discover a showcase of our community service projects. We are a student-led initiative 
            dedicated to bridging academic learning with real-world impact, creating positive change 
            in Cambodian society.
          </p>
        </div>

        {/* Projects Grid */}
          <ProjectCard />
 
        <div className='my-14 items-center justify-center flex'>
        <Link href="/us">
          <Button variant="ghost" className="bg-[#B22234]/60 w-55 h-full  p-4 rounded-full text-base">
            Views All Projects <ChevronRightIcon />
          </Button>
        </Link>
        </div>
      </div>

  )
}

export default ClubProject