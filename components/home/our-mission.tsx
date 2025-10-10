import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const OurMission = () => {
  return (
    <div className='px-6 py-20 -skew-y-1 bg-gradient-to-r from-emerald-800 to-amber-300 my-12'>
      <div className="bg-[url('/images/square.png')] bg-cover bg-no-repeat bg-center ">
        <div className='flex items-start flex-col justify-start max-w-3xl m-auto '>
          <div className='w-12 h-1 bg-white mb-4 skew-y-1'></div>
          <div className='skew-y-1'>
            <span className='text-white text-2xl md:text-3xl font-bold text-center text-balance'>
              Rentabiliser les programmes de développement des compétences dans les grandes organisations en formant autrement les employés
              et en transformant positivement leur rapport aux changements
            </span>
          </div>
          <Link
            href={`/contact`}
            className='p-2.5 bg-black/40 rounded-sm font-semibold text-white text-center mt-6 skew-y-1 flex items-center justify-center group hover:bg-black/60 duration-500 transition-all gap-x-1.5 w-full sm:w-fit'
          >
            <span>Contactez-nous maintenant</span>
            <ArrowRight className='group-hover:translate-x-1 group-hover:rotate-[-20deg] transition-transform duration-200 group-hover:text-emerald-400' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OurMission
