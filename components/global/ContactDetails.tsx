import React from 'react'
import ContactDetailHour from './ContactDetailHour'
import ContactDetailPhone from './ContactDetailPhone'
import ContactDetailAddress from './ContactDetailAddress'

const ContactDetails = () => {
  return (
    <div className='flex flex-col lg:py-5 items-start md:items-center justify-start '>
      <div className='md:p-12'>
        <ul className='space-y-12 flex flex-col md:space-y-16  w-full'>
          <ContactDetailHour />
          <ContactDetailAddress />
          <ContactDetailPhone />
        </ul>
      </div>
    </div>
  )
}

export default ContactDetails
