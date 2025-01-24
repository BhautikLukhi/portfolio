'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitButton from './SubmitButton'
import toast from 'react-hot-toast'

const Contact = () => {
  const { ref } = useSectionInView("Contact")

  return (
    <motion.section 
      id="contact"
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading> Contact me </SectionHeading>
      <p className='text-gray-700 -mt-4 dark:text-white/80'>Please contact me directly at {" "}
        <a href="mailto:mgorasiya1974@gmail.com" className='underline'>bhautiklukhi01@gmail.com</a> {" "} or through this form.
      </p>

      <form 
        action={async formData => {
          const { data, error } = await sendEmail(formData)
          if(error){
            toast.error(error)
            return
          }

          toast.success("Email sent successfully!")
        }}
        className='mt-10 flex flex-col dark:text-black'>
        <input 
          type="email"
          name="senderEmail"
          required
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          placeholder='Your email'
          maxLength={500}
        />
        <textarea 
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name="message"
          required
          placeholder='Your message'
          maxLength={5000}
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  )
}

export default Contact