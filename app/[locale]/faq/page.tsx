import { DetailsSummaryFAQ } from '@/components/global/DetailsSummaryFAQ'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ'
  // openGraph: {
  //   type: 'website',
  //   url: 'https://dooke.app',
  //   title: 'FAQ',
  //   images: [
  //     {
  //       url: `https://dooke.app/assets/images/openGraph/faq.webp`
  //     }
  //   ]
  // },
  // twitter: {
  //   title: 'FAQ',
  //   card: 'summary_large_image',
  //   images: [
  //     {
  //       url: `https://dooke.app/assets/images/openGraph/faq.webp`
  //     }
  //   ]
  // }
}
const faQuestions = [
  {
    question: 'Qu’est-ce que Talonmba Formation ?',
    answer:
      'Talonmba Formation est une plateforme dédiée à la formation professionnelle et au développement des compétences. Notre mission est de rentabiliser les programmes de développement des compétences dans les grandes organisations en formant autrement les employés et en transformant positivement leur rapport aux changements'
  },
  {
    question: 'Combien coûte l’inscription à Talonmba Formation ?',
    answer: 'L’inscription à Talonmba Formation est gratuite.'
  },
  {
    question: 'Puis-je accéder à Talonmba Formation sur tous les appareils ?',
    answer: `Oui, Talonmba Formation est accessible sur tous les appareils, y compris les ordinateurs, les tablettes et les smartphones.`
  },
  {
    question: 'Comment puis-je contacter Talonmba Formation ?',
    answer:
      "Vous pouvez nous contacter par email à <a class='text-primary hover:underline' target='_blank' href='mailto:infos@talonmba.ca'>infos@talonmba.ca</a> ou visiter <a class='text-primary hover:underline' target='_blank' href='https://www.formation.talonmba.ca/contact'>notre page de contact</a> pour plus d’informations."
  }
]

const FAQ = async () => {
  return (
    <>
      <div className='py-6 flex flex-col justify-center p-4 md:p-12 w-full md:max-w-4xl mx-auto my-10'>
        <div className='flex flex-col gap-y-4'>
          {faQuestions.map((faq, index) => (
            <DetailsSummaryFAQ
              name='faq'
              key={index}
              summary={faq.question}
              // summaryCLassName='bg-white shadow-1d hover:bg-gray-100 shadow-emerald-400'
            >
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} className='p-4' />
            </DetailsSummaryFAQ>
          ))}
        </div>

        <div className='my-6 bg-emerald-800d text-whited p-4 border border-slate-700/50'>
          <span>
            {"Tu n'as pas trouvé la réponse à ta question ? "}
            <Link className='text-primary2 font-medium underline' href='/contact'>
              Contactez-nous
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}

export default FAQ
