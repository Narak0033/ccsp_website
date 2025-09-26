import React from 'react'
import { useTranslations } from "next-intl";


const AboutCCSP = () => {
const t = useTranslations("AboutClub");
  return (
    <section className='my-24'>
        <div data-aos="fade-up" className="container relative z-10">
            <div className="grid grid-cols-1 md:px-2 lg:px-0 items-center">
                <div className="space-y-8">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-30"></div>
                    <div className="relative">
                        <h1 className="text-header text-center font-black leading-tight mb-2">
                            Committee for Community Service Program (CCSP)
                        </h1>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className="bg-[#0f142ed9] backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300">
                            <p className='text-lg leading-relaxed text-center max-w-5xl text-white'>
                                The Committee for Community Service Program (CCSP) {t("title1")}
                                <br /><br />
                            {t("title2")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutCCSP
