import React from 'react'

import { ShieldQuestion } from 'lucide-react'

const questions = [
  {
    id: '2',
    title: 'Votre personnel ou vous-même avez tendance à subir les changements organisationnels et à devenir inefficaces et improductifs?',
    description: 'Nous proposons des formations pour aider votre équipe à s’adapter aux changements de manière proactive.',
    answer: {
      title: 'Dans une approche pragmatique et agile qui favorise  ',
      items: [
        'L’orientation et la satisfaction client',
        'La construction de sens de l’action',
        'L’autonomisation du personnel et des équipes',
        'La transparence et la communication'
      ]
    }
  },

  {
    id: '3',
    title:
      'Vous soupirez après une mobilisation et un engagement de vos équipes pour faire face aux multiples changements nécessaires ou imposés à votre organisation?',
    description: 'Nous travaillons avec vous pour mobiliser et engager vos équipes dans le processus de changement.',
    answer: {
      title: 'Avec un dévouement axé sur  ',
      items: ['L’écoute et la collaboration', 'Le professionnalisme', 'La disponibilité', 'L’efficacité et les résultats concrets']
    }
  },
  {
    id: '4',
    title:
      'Vous vous préoccupez du réinvestissement des acquis de la formation dans les mandats de votre organisation pendant ou dès le lendemain de la formation, surtout dans un contexte de roulement non négligeable du personnel?',
    description: 'Nous vous aidons à transformer les changements en opportunités de développement organisationnel.',
    answer: {
      title: 'En transformant les changements en  ',
      items: [
        'Opportunités de croissance',
        'Catalyseurs d’innovation',
        'Moteurs de performance organisationnelle',
        'Sources de motivation et d’engagement'
      ]
    }
  },

  {
    id: '5',
    title:
      'Vous souhaitez développer les compétences de votre personnel formateur pour de plus grandes retombées des formations offertes à l’ensemble de votre personnel?',
    description: 'Nous vous aidons à construire un sens collectif autour des changements et de la formation.',
    answer: {
      title: 'En créant un environnement où  ',
      items: [
        'Les employés se sentent valorisés',
        'Les équipes sont engagées',
        'La culture organisationnelle est renforcée',
        'Les résultats sont mesurables et durables'
      ]
    }
  },
  {
    id: '1',
    title:
      'Vous n’avez pas une vue d’ensemble des compétences à développer chez vous ou chez votre personnel pour atteindre vos objectifs stratégiques?',
    description: 'Nous vous aidons à identifier les compétences clés à développer pour atteindre vos objectifs organisationnels.',
    answer: {
      title: 'Réponse à vos besoins de ',
      items: [
        'Performance immédiate',
        'Flexibilité et adaptabilité',
        'Développement de compétences spécifiques',
        'Optimisation et réduction des coûts',
        'Mesure de l’impact des formations et des changements',
        'Renforcement de la motivation et de la satisfaction du personnel'
      ]
    }
  }
]

const LookingFor = () => {
  return (
    <section className='py-12 bg-gray-50f bg-primary2  sm:py-16 lg:py-20'>
      <div className='mx-auto max-w-7xl p-6'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj'>
            <span className=' bg-gradient-to-r from-white to-gray-200  bg-clip-text text-transparent text-whitef uppercase'>
              Que cherchez-vous?
            </span>
          </h2>
        </div>
        <div className='flex flex-col hover:shadow-1d pt-4  items-center gap-6 max-w-4xl borderf  mx-auto mt-8 lg:mt-20 lg:flex-rowd lg:max-w-noned relative'>
          {questions.map((item) => {
            return (
              <div
                key={item.id}
                className='relative flex justify-start  items-start flex-1 w-full hover:bg-black/20 rounded-md p-4 cursor-pointer'
              >
                <div className=' self-centerf flex items-center justify-center relative borderf'>
                  <ShieldQuestion size={50} className='text-white' strokeWidth={0.4} />
                </div>
                <div className='py-8e px-9 relative'>
                  <p className=' text-white font-medium text-lg font-pj mb-4'>{item.title}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LookingFor
