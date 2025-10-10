import React from 'react'
import FadeInImage from '../global/FadeInImage'

const WhoAmI = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-primary2 p-6 skew-y-2 my-20'>
      <div className='flex flex-col md:flex-row items-center max-w-7xl m-auto -skew-y-2'>
        <FadeInImage
          path='/images/who-am-i.svg'
          alt='Who Am I'
          imageClassName='h-auto w-[40%] aspect-auto bg-transparent'
          className='aspect-auto h-auto w-[40%]'
        />
        <div className='flex flex-col p-3 sm:p-6 flex-1'>
          <h2 className='text-5xl font-bold text-left text-white mb-4'>QUI SUIS-JE?</h2>
          <div className='flex flex-col gap-y-6 '>
            <p className='text-slate-100 text-lg text-left'>
              Je suis <span className='text-slate-800 font-semibold'>stratège en développement agile et pragmatique des compétences</span>,
              spécialisée dans la conception de formations concrètes, engageantes et directement applicables en milieu de travail. Mon
              approche vise à transformer l’apprentissage en levier de performance et d’adaptation au changement.
            </p>
            <p className='text-white text-lg text-left bg-black/10 p-6 rounded-lg'>
              {`J’aide les organisations à rentabiliser le développement des compétences de leurs équipes, en créant des parcours de
                  formation sur mesure, ancrés dans la réalité de leurs employés. Mon accompagnement permet d'obtenir des résultats
                  concrets, durables, et alignés avec vos objectifs stratégiques.`}
            </p>
            <p className='text-slate-100 text-lg text-left'>
              Ma méthode repose sur plusieurs années d’expérience en formation et en recherche. Je me distingue par l’intégration de données
              scientifiques et la prise en compte de l’environnement de travail réel pour générer un impact positif, mesurable et motivant.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoAmI
