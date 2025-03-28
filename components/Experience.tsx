'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="experience"
      className='scroll-mt-28 mb-28 sm:mb-40'
    >
      <SectionHeading> My Experience </SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                backgroundColor: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                cursor: "pointer",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem"
              }}
            >
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-black dark:text-white no-underline hover:underline"
              >
                <h3 className='font-semibold capitalize'>{item.title}</h3>
                <p className='font-normal'>{item.location}</p>
                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{item.description}</p>
              </a>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
