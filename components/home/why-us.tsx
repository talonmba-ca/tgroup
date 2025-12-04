import React from 'react'
const questions = [
  {
    id: '3',
    title:
      'Vous soupirez après une mobilisation et un engagement de vos équipes pour faire face aux multiples changements nécessaires ou imposés à votre organisation?',
    description: 'Nous travaillons avec vous pour mobiliser et engager vos équipes dans le processus de changement.',
    answer: {
      title: 'Un engagement client sans compromis',
      items: [
        'Écoute active et collaboration réelle',
        'Professionnalisme et disponibilité',
        'Accompagnement personnalisé',
        'Résultats mesurables et fiabilité constante        '
      ]
    }
  },
  {
    id: '2',
    title: 'Votre personnel ou vous-même avez tendance à subir les changements organisationnels et à devenir inefficaces et improductifs?',
    description: 'Nous proposons des formations pour aider votre équipe à s’adapter aux changements de manière proactive.',
    answer: {
      title: 'Une approche pragmatique et agile',
      items: [
        'Flexibilité et adaptation rapide',
        'Optimisation des coûts et performance immédiate',
        'Méthodes centrées sur l’impact concret',
        'Transparence et communication continue'
      ]
    }
  },

  {
    id: '1',
    title:
      'Vous n’avez pas une vue d’ensemble des compétences à développer chez vous ou chez votre personnel pour atteindre vos objectifs stratégiques?',
    description: 'Nous vous aidons à identifier les compétences clés à développer pour atteindre vos objectifs organisationnels.',
    answer: {
      title: 'Expertise reconnue et solutions adaptées ',
      items: [
        'Plus de 30 ans d’expérience en TI et cybersécurité',
        'Maîtrise de l’IA, cloud et technologies émergentes',
        'Solutions efficaces et directement applicables',
        'Services adaptés aux besoins réels des organisations'
      ]
    }
  }
]

const WhyUs = () => {
  return (
    <section className='py-12 bg-gray-50 sm:py-16 lg:py-20' id='why-us'>
      <div className='mx-auto max-w-7xl p-6'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-800 sm:text-4xl xl:text-5xl font-pj'>
            POURQUOI <span className=' text-gradient'>TALONMBA</span>
          </h2>
          <p className='max-w-2xl mx-auto mt-5 text-xl font-normal text-gray-600 font-pj'>
            Talonmba offre des solutions technologiques, de formation et d’accompagnement adaptées aux besoins des organisations, avec une
            expertise solide, une approche agile et un engagement total envers ses clients.
          </p>
        </div>

        <div className='flex flex-col items-center max-w-md mx-auto mt-8 lg:mt-20 lg:flex-row lg:max-w-none relative'>
          {questions.map((item, index) => {
            return (
              <React.Fragment key={item.id}>
                {index !== 1 ? (
                  <div className='relative flex-1 w-full overflow-hidden bg-white hover:shadow-1 rounded-2xl'>
                    <div className='py-8 px-9 relative'>
                      <div className=' flex items-center justify-center'>
                        <div className='inline-flex items-center justify-center w-10 h-10 text-xl font-bold text-primary shadow-primary2 shadow bg-white rounded-full font-pj'>
                          {index + 1}
                        </div>
                      </div>
                      <div className='pt-4'>
                        <p className='font-pj text-gradient font-bold text-xl text-center'>{item.answer.title}</p>
                        <ul className='list-disc pl-5 mt-2'>
                          {item.answer.items.map((answerItem, answerIndex) => (
                            <li key={answerIndex} className='text-gray-600 font-pj'>
                              {answerItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='relative flex-1 w-full'>
                    <div className='absolute -inset-4'>
                      <div
                        className='w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter'
                        style={{
                          background:
                            'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                        }}
                      ></div>
                    </div>
                    <div className='relative overflow-hidden bg-white hover:shadow-1 rounded-2xl  '>
                      <div className='py-8 px-9 '>
                        <div className=' flex items-center justify-center'>
                          <div className='inline-flex items-center justify-center w-10 h-10 text-xl font-bold text-primary shadow-primary shadow bg-white rounded-full font-pj'>
                            {index + 1}
                          </div>
                        </div>

                        <div className='pt-4'>
                          <p className='text-gray-600 font-pj text-gradient font-bold text-xl text-center'>{item.answer.title}</p>
                          <ul className='list-disc pl-5 mt-2'>
                            {item.answer.items.map((answerItem, answerIndex) => (
                              <li key={answerIndex} className='text-gray-600 font-pj'>
                                {answerItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {index !== 2 && (
                  <>
                    <div className='block -my-1 lg:hidden'>
                      <svg
                        className='w-4 h-auto text-gray-300'
                        viewBox='0 0 16 32'
                        fill='none'
                        stroke='currentColor'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 21)' />
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 14)' />
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 7)' />
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(0.83205 0.5547 0.5547 -0.83205 1 0)' />
                      </svg>
                    </div>

                    <div className='hidden lg:block lg:-mx-2'>
                      <svg
                        className='w-auto h-4 text-gray-300'
                        viewBox='0 0 81 16'
                        fill='none'
                        stroke='currentColor'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(-0.5547 0.83205 0.83205 0.5547 11 1)' />
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(-0.5547 0.83205 0.83205 0.5547 46 1)' />
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(-0.5547 0.83205 0.83205 0.5547 81 1)' />
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(-0.5547 0.83205 0.83205 0.5547 18 1)' />
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(-0.5547 0.83205 0.83205 0.5547 53 1)' />
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(-0.5547 0.83205 0.83205 0.5547 25 1)' />
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(-0.5547 0.83205 0.83205 0.5547 60 1)' />
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(-0.5547 0.83205 0.83205 0.5547 32 1)' />
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(-0.5547 0.83205 0.83205 0.5547 67 1)' />
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(-0.5547 0.83205 0.83205 0.5547 39 1)' />
                        <line y1='-0.5' x2='18.0278' y2='-0.5' transform='matrix(-0.5547 0.83205 0.83205 0.5547 74 1)' />
                      </svg>
                    </div>
                  </>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
