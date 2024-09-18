import { PhoneCall } from '@phosphor-icons/react'
import React from 'react'

const ContactUs = () => {
  return (
    <div className='flex justify-center items-center '>
        <span className='text-[14px] line-height-[16.94px] text-[#484848] font-[400] mr-[6px]'>Contact us:</span>
        <PhoneCall  className='w-[15px] text-[#666666]' />
        <span className='text-[12px] line-height-[14.52px] text-[#666666] font-[400]'>+20 (116) 554-232</span>
    </div>
  )
}

export default ContactUs