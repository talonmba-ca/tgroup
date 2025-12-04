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
    question: 'Qu’est-ce que Talonmba ?',
    answer:
      'Talonmba est une organisation spécialisée en technologies de l’information, cybersécurité, intelligence artificielle, formation professionnelle et logistique. Nous aidons les organisations à accroître leur performance grâce à des solutions modernes, sécurisées et adaptées.'
  },
  {
    question: 'Quels services offre Talonmba ?',
    answer:
      'Nous offrons des services en cybersécurité, intelligence artificielle, infonuagique, développement technologique, formation professionnelle sur mesure et logistique entre le Canada et l’Afrique.'
  },
  {
    question: 'À qui s’adressent les services de Talonmba ?',
    answer:
      'Nos services s’adressent aux entreprises, institutions, organisations gouvernementales ainsi qu’aux professionnels souhaitant développer leurs compétences ou améliorer leur environnement technologique.'
  },
  {
    question: 'Talonmba propose-t-il des formations sur mesure ?',
    answer:
      'Oui, nous concevons des programmes de formation adaptés aux besoins des organisations : cybersécurité, IA, transformation numérique, gestion du changement, et développement professionnel.'
  },
  {
    question: 'Offrez-vous un accompagnement pour les nouveaux arrivants au Québec ?',
    answer:
      'Oui. Talonmba offre un accompagnement pour étudier, travailler et s’intégrer au Québec : orientation, préparation, coaching et développement de compétences adaptées au marché local.'
  },
  {
    question: 'Comment puis-je collaborer avec Talonmba ?',
    answer:
      "Vous pouvez nous écrire à <a class='text-primary hover:underline' target='_blank' href='mailto:info@talonmba.com'>info@talonmba.com</a> ou visiter <a class='text-primary hover:underline' target='_blank' href='https://talonmba.ca/contact'>notre page de contact</a> pour discuter de vos besoins."
  },
  {
    question: 'Les services de Talonmba sont-ils disponibles à l’international ?',
    answer: 'Oui. Talonmba est présent au Canada et au Cameroun, et intervient sur plusieurs marchés en Amérique du Nord et en Afrique.'
  },
  {
    question: 'Puis-je accéder aux formations Talonmba sur n’importe quel appareil ?',
    answer:
      'Oui, nos formations en ligne, documents et ressources sont accessibles sur ordinateur, tablette et smartphone pour une expérience flexible et intuitive.'
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
