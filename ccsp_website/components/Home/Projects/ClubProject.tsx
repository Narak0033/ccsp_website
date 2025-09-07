import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from 'lucide-react'

const ClubProject = () => {
  return (
      <div className="container my-28 md:my-40">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col space-y-6 mb-12">
          <div className="text-center space-y-4">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-30"></div>
            <h1 className="relative text-header font-bold leading-snug bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
             Our Projects
            </h1>
          </div>
          </div>
          
          <p className="text-center text-gray-300 subtext">
            Discover a showcase of our community service projects. We are a student-led initiative 
            dedicated to bridging academic impact.
          </p>
        </div>

        {/* Projects Grid */}
          <ProjectCard />
 
        <div className='my-14 items-center justify-center flex'>
        <Link href="/projects">
          <Button variant="ghost" className="bg-[#B22234]/60 w-55 h-full  p-4 rounded-full text-base">
            Views All Projects <ChevronRightIcon />
          </Button>
        </Link>
        </div>
      </div>

  )
}

export default ClubProject