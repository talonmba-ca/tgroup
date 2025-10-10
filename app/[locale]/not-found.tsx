import Link from 'next/link'

export default function NotFound() {
  return (
    <div className=''>
      <div className='bg-white shadow-1 p-6 rounded-md flex flex-col items-center justify-center max-w-xl mx-auto mt-12'>
        <h2 className='text-3xl font-bold text-red-400'>Not Found</h2>
        <p>Impossible de trouver la ressource demandée</p>
        <Link href='/' className=' underline my-6 text-primary'>
          {` Retour à l'accueil`}
        </Link>
      </div>
    </div>
  )
}
