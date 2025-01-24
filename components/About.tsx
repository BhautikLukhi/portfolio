'use client';

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const {ref} = useSectionInView("About")

  return (
    <motion.section 
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading> About me </SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Engineering</span>, I decided to move to Germany to pursue my
        passion for mathematics and programming.{" "}<span className="italic">My favorite part of Data Science</span> is the
        real-world application of AI/ML. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          python, Machine Learning, Deep Learning, Data analysis, and Statistical Learning
        </span>
        . I am also familiar with R, JavaScript and SQL databases. I am always looking to
        learn and explore new technologies.{" "}
        <span> I am a crazy adaptive learner and believe in continuous personal and professional development. I am always open to new opportunities and collaborations where I can contribute my skills, expertise, and passion to make a meaningful impact.</span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy listening
        to music, doing astrophotography, and cooking.
      </p>
    </motion.section>
  )
}

export default About